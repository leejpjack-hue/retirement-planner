// Calculation utilities for Retirement Planner - Detailed Version

import type { UserState, CalculationResult, DetailedResult } from '../types';
import { getCityById } from '../data/cities';

const DEFAULT_RETIREMENT_AGE = 65;
const DEFAULT_WITHDRAWAL_RATE = 0.04;
const DEFAULT_INVESTMENT_RETURN = 0.06;

export const calculateRetirement = (state: UserState): CalculationResult => {
  const city = getCityById(state.retireCity);
  if (!city) {
    return calculateWithCity(state, getCityById('hong_kong')!);
  }
  return calculateWithCity(state, city);
};

const calculateWithCity = (state: UserState, city: ReturnType<typeof getCityById>): CalculationResult => {
  if (!city) {
    throw new Error('City not found');
  }
  
  const lifestyleMultiplier = state.food * state.travel * state.transport * state.hobbies;
  const baseMonthly = city.monthlyUSD;
  const adjustedMonthly = baseMonthly * lifestyleMultiplier;
  
  const yearsToRetire = DEFAULT_RETIREMENT_AGE - state.age;
  const inflationRate = city.inflation / 100;
  const futureMonthly = adjustedMonthly * Math.pow(1 + inflationRate, yearsToRetire);
  
  const annualExpense = futureMonthly * 12;
  const totalNeeded = annualExpense / DEFAULT_WITHDRAWAL_RATE;
  
  const monthlyRate = DEFAULT_INVESTMENT_RETURN / 12;
  const months = yearsToRetire * 12;
  const savingsNeed = totalNeeded * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
  
  const localAmount = totalNeeded * city.rate;
  
  return {
    totalNeeded: Math.round(totalNeeded),
    monthlyNeed: Math.round(futureMonthly),
    inflationRate: city.inflation,
    savingsNeed: Math.round(savingsNeed),
    yearsToRetire,
    localAmount: Math.round(localAmount),
    currency: city.currency,
  };
};

// Detailed calculation with breakdown
export const calculateDetailed = (state: UserState): DetailedResult => {
  const city = getCityById(state.retireCity);
  if (!city) {
    throw new Error('City not found');
  }
  
  // Get expense values based on choices
  const foodValues = [city.expenses.food.home, city.expenses.food.delivery, city.expenses.food.dining, city.expenses.food.fine];
  const transportValues = [city.expenses.transport.public, city.expenses.transport.walk, city.expenses.transport.car, city.expenses.transport.taxi];
  const lifestyleValues = [city.expenses.lifestyle.tv, city.expenses.lifestyle.learn, city.expenses.lifestyle.sports, city.expenses.lifestyle.travel];
  
  const foodIndex = [1.0, 1.3, 1.6, 2.0].indexOf(state.food);
  const transportIndex = [0.8, 1.0, 1.5, 2.0].indexOf(state.transport);
  const lifestyleIndex = [0.8, 1.0, 1.3, 1.6].indexOf(state.hobbies);
  
  const monthlyFood = foodValues[foodIndex >= 0 ? foodIndex : 0];
  const monthlyTransport = transportValues[transportIndex >= 0 ? transportIndex : 0];
  const monthlyHousing = city.expenses.housing.rent;
  const monthlyUtility = city.expenses.housing.utility;
  const monthlyLifestyle = lifestyleValues[lifestyleIndex >= 0 ? lifestyleIndex : 0];
  
  const currentMonthly = monthlyFood + monthlyTransport + monthlyHousing + monthlyUtility + monthlyLifestyle;
  
  // Future calculation with inflation
  const yearsToRetire = DEFAULT_RETIREMENT_AGE - state.age;
  const inflationRate = city.inflation / 100;
  
  const futureFood = monthlyFood * Math.pow(1 + inflationRate, yearsToRetire);
  const futureTransport = monthlyTransport * Math.pow(1 + inflationRate, yearsToRetire);
  const futureHousing = monthlyHousing * Math.pow(1 + inflationRate, yearsToRetire);
  const futureUtility = monthlyUtility * Math.pow(1 + inflationRate, yearsToRetire);
  const futureLifestyle = monthlyLifestyle * Math.pow(1 + inflationRate, yearsToRetire);
  
  const futureMonthly = futureFood + futureTransport + futureHousing + futureUtility + futureLifestyle;
  const futureYearly = futureMonthly * 12;
  
  // Investment calculation
  const totalNeeded = futureYearly / DEFAULT_WITHDRAWAL_RATE;
  const monthlyRate = DEFAULT_INVESTMENT_RETURN / 12;
  const months = yearsToRetire * 12;
  const monthlySavings = totalNeeded * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
  
  // Tax impact (if withdrawing from retirement fund)
  const taxRate = city.tax / 100;
  const totalWithTax = totalNeeded * (1 + taxRate);
  
  return {
    // Current expenses
    currentMonthly,
    monthlyFood,
    monthlyTransport,
    monthlyHousing,
    monthlyUtility,
    monthlyLifestyle,
    
    // Future expenses (at retirement)
    futureMonthly,
    futureFood,
    futureTransport,
    futureHousing,
    futureUtility,
    futureLifestyle,
    
    // Summary
    totalNeeded,
    totalWithTax,
    monthlySavings,
    yearsToRetire,
    inflationRate,
    taxRate,
    
    // City info
    cityName: city.name,
    currency: city.currency,
    cityRate: city.rate,
  };
};

export const getSuggestion = (monthlySavings: number): string => {
  if (monthlySavings > 2000) {
    return '每月要儲幾多，建議增加收入或降低支出';
  } else if (monthlySavings > 1000) {
    return '目標啱啱好，繼續保持';
  } else {
    return '好好彩！你既目標幾容易達成';
  }
};

export const formatCurrency = (amount: number, currency: string): string => {
  return `${currency} $${amount.toLocaleString()}`;
};

export const formatUSD = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

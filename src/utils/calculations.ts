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
  
  // Safety: use default values if undefined/NaN
  const food = state.food || 1.0;
  const cuisineType = state.cuisineType || 1.0;
  const travel = state.travel || 1.0;
  const transport = state.transport || 1.0;
  const hobbies = state.hobbies || 1.0;
  const medical = state.medical || 1.0;
  const housing = state.housing || 'rent';
  const age = state.age || 30;
  
  // Comprehensive lifestyle multiplier
  const lifestyleMultiplier = food * cuisineType * travel * transport * hobbies * medical;
  
  // Housing multiplier
  const housingMultiplier = housing === 'own' ? 0.3 : housing === 'rent' ? 1.0 : 0.5;
  
  const baseMonthly = city.monthlyUSD;
  const adjustedMonthly = baseMonthly * lifestyleMultiplier * housingMultiplier;
  
  const yearsToRetire = Math.max(1, DEFAULT_RETIREMENT_AGE - age);
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

// Detailed calculation with full breakdown
export const calculateDetailed = (state: UserState): DetailedResult => {
  const city = getCityById(state.retireCity);
  if (!city) {
    throw new Error('City not found');
  }
  
  // Safety: use default values if undefined/NaN
  const food = state.food || 1.0;
  const cuisineType = state.cuisineType || 1.0;
  const transport = state.transport || 1.0;
  const hobbies = state.hobbies || 1.0;
  const medical = state.medical || 1.0;
  const housing = state.housing || 'rent';
  const age = state.age || 30;
  
  // Get expense values based on choices
  const foodIndex = [1.0, 1.3, 1.6, 2.0].indexOf(food);
  const cuisineIndex = [1.0, 1.2, 1.4, 1.5, 1.6].indexOf(cuisineType);
  const transportIndex = [0.8, 1.0, 1.5, 2.0].indexOf(transport);
  const lifestyleIndex = [0.8, 1.0, 1.3, 1.6].indexOf(hobbies);
  const medicalIndex = [0.8, 1.0, 1.3, 1.6].indexOf(medical);
  
  const foodValues = [city.expenses.food.home, city.expenses.food.delivery, city.expenses.food.dining, city.expenses.food.fine];
  const cuisineValues = [city.expenses.cuisine.chinese, city.expenses.cuisine.japanese, city.expenses.cuisine.western, city.expenses.cuisine.international];
  const transportValues = [city.expenses.transport.public, city.expenses.transport.walk, city.expenses.transport.car, city.expenses.transport.taxi];
  const lifestyleValues = [500, 800, 1500, 3000]; // TV, Learn, Sports, Travel
  const medicalValues = [city.expenses.medical.basic, city.expenses.medical.regular, city.expenses.medical.private, city.expenses.medical.premium];
  
  const monthlyFood = foodValues[foodIndex >= 0 ? foodIndex : 0];
  const monthlyCuisine = cuisineValues[cuisineIndex >= 0 ? cuisineIndex : 0];
  const monthlyTransport = transportValues[transportIndex >= 0 ? transportIndex : 0];
  const monthlyLifestyle = lifestyleValues[lifestyleIndex >= 0 ? lifestyleIndex : 0];
  const monthlyMedical = medicalValues[medicalIndex >= 0 ? medicalIndex : 0];
  
  // Housing based on type
  let monthlyHousing = 0;
  if (housing === 'rent') {
    monthlyHousing = city.expenses.housing.rent;
  } else if (housing === 'own') {
    monthlyHousing = city.expenses.housing.mortgage * 0.3;
  } else {
    monthlyHousing = city.expenses.housing.utility;
  }
  
  const monthlyUtility = city.expenses.housing.utility;
  
  const currentMonthly = monthlyFood + monthlyCuisine + monthlyTransport + monthlyHousing + monthlyUtility + monthlyLifestyle + monthlyMedical;
  
  // Future calculation with inflation
  const yearsToRetire = Math.max(1, DEFAULT_RETIREMENT_AGE - age);
  const inflationRate = city.inflation / 100;
  
  const futureFood = monthlyFood * Math.pow(1 + inflationRate, yearsToRetire);
  const futureTransport = monthlyTransport * Math.pow(1 + inflationRate, yearsToRetire);
  const futureHousing = monthlyHousing * Math.pow(1 + inflationRate, yearsToRetire);
  const futureUtility = monthlyUtility * Math.pow(1 + inflationRate, yearsToRetire);
  const futureLifestyle = monthlyLifestyle * Math.pow(1 + inflationRate, yearsToRetire);
  const futureMedical = monthlyMedical * Math.pow(1 + inflationRate * 1.5, yearsToRetire);
  
  const futureCuisine = monthlyCuisine * Math.pow(1 + inflationRate, yearsToRetire);
  const futureMonthly = futureFood + futureCuisine + futureTransport + futureHousing + futureUtility + futureLifestyle + futureMedical;
  const futureYearly = futureMonthly * 12;
  
  // Investment calculation
  const totalNeeded = futureYearly / DEFAULT_WITHDRAWAL_RATE;
  const monthlyRate = DEFAULT_INVESTMENT_RETURN / 12;
  const months = yearsToRetire * 12;
  const monthlySavings = totalNeeded * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
  
  // Tax impact
  const taxRate = city.tax / 100;
  const totalWithTax = totalNeeded * (1 + taxRate);
  
  // Property asset value
  const propertyAsset = state.hasProperty ? state.propertyValue : 0;
  
  // Housing type label
  const housingLabels = { own: '自置物业', rent: '租楼', family: '与家人同住' };
  
  return {
    // Current expenses
    currentMonthly,
    monthlyFood: monthlyFood + monthlyCuisine,
    monthlyTransport,
    monthlyHousing,
    monthlyUtility,
    monthlyLifestyle,
    monthlyMedical,
    
    // Future expenses
    futureMonthly,
    futureFood,
    futureTransport,
    futureHousing,
    futureUtility,
    futureLifestyle,
    futureMedical,
    
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
    
    // Housing
    housingType: housingLabels[housing],
    propertyAsset,
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

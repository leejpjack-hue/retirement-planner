// Calculation utilities for Retirement Planner

import type { UserState, CalculationResult } from '../types';
import { getCityById } from '../data/cities';

// Default values
const DEFAULT_RETIREMENT_AGE = 65;
const DEFAULT_WITHDRAWAL_RATE = 0.04; // 4% rule
const DEFAULT_INVESTMENT_RETURN = 0.06; // 6% annual return

export const calculateRetirement = (state: UserState): CalculationResult => {
  const city = getCityById(state.retireCity);
  
  if (!city) {
    // Fallback to Hong Kong
    return calculateWithCity(state, getCityById('hong_kong')!);
  }
  
  return calculateWithCity(state, city);
};

const calculateWithCity = (state: UserState, city: ReturnType<typeof getCityById>): CalculationResult => {
  if (!city) {
    throw new Error('City not found');
  }
  
  // Calculate lifestyle multiplier
  const lifestyleMultiplier = state.food * state.travel * state.transport * state.hobbies;
  
  // Base monthly expense in USD
  const baseMonthly = city.monthlyUSD;
  const adjustedMonthly = baseMonthly * lifestyleMultiplier;
  
  // Years until retirement
  const yearsToRetire = DEFAULT_RETIREMENT_AGE - state.age;
  
  // Inflation adjustment
  const inflationRate = city.inflation / 100;
  const futureMonthly = adjustedMonthly * Math.pow(1 + inflationRate, yearsToRetire);
  
  // Total needed using 4% rule
  const annualExpense = futureMonthly * 12;
  const totalNeeded = annualExpense / DEFAULT_WITHDRAWAL_RATE;
  
  // Monthly savings needed
  const monthlyRate = DEFAULT_INVESTMENT_RETURN / 12;
  const months = yearsToRetire * 12;
  const savingsNeed = totalNeeded * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
  
  // Local currency
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

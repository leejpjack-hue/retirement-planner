// MPF Calculation utilities for Hong Kong
export interface MPFResult {
  currentBalance: number;
  employeeContribution: number;
  employerContribution: number;
  totalContribution: number;
  projectedBalance: number;
  yearsToRetire: number;
  expectedReturn: number;
}

// MPF contribution limits (2026)
const MAX_MONTHLY_INCOME = 30000; // HKD
const MPF_RATE = 0.05; // 5% each for employee and employer

export const calculateMPF = (
  currentAge: number,
  retireAge: number = 65,
  currentBalance: number = 0,
  monthlyIncome: number = 15000,
  expectedReturn: number = 0.05
): MPFResult => {
  const yearsToRetire = Math.max(1, retireAge - currentAge);
  const months = yearsToRetire * 12;
  
  // Calculate monthly contribution (capped at max income)
  const cappedIncome = Math.min(monthlyIncome, MAX_MONTHLY_INCOME);
  const monthlyContribution = cappedIncome * MPF_RATE;
  const employeeContribution = monthlyContribution;
  const employerContribution = monthlyContribution;
  const totalContribution = employeeContribution + employerContribution;
  
  // Calculate future value with compound interest
  const monthlyReturn = expectedReturn / 12;
  let projectedBalance = currentBalance;
  
  for (let i = 0; i < months; i++) {
    projectedBalance = (projectedBalance + totalContribution) * (1 + monthlyReturn);
  }
  
  return {
    currentBalance,
    employeeContribution,
    employerContribution,
    totalContribution,
    projectedBalance: Math.round(projectedBalance),
    yearsToRetire,
    expectedReturn,
  };
};

export const formatMPF = (result: MPFResult): string => {
  return `
MPF 強積金估算
================
當前年齡至65歲: ${result.yearsToRetire}年

每月供款:
- 僱員: $${result.employeeContribution}
- 僱主: $${result.employerContribution}
- 總計: $${result.totalContribution}

預期回報: ${(result.expectedReturn * 100).toFixed(1)}%

預計65歲時結餘: $${result.projectedBalance.toLocaleString()}
`;
};

// Inflation calculator
export interface InflationResult {
  currentAmount: number;
  years: number;
  inflationRate: number;
  futureValue: number;
  loss: number;
}

export const calculateInflation = (
  currentAmount: number,
  years: number,
  inflationRate: number = 0.03
): InflationResult => {
  const futureValue = currentAmount * Math.pow(1 + inflationRate, years);
  const loss = futureValue - currentAmount;
  
  return {
    currentAmount,
    years,
    inflationRate,
    futureValue: Math.round(futureValue),
    loss: Math.round(loss),
  };
};

export const formatInflation = (result: InflationResult): string => {
  return `
通脹計算
========
現在金額: $${result.currentAmount.toLocaleString()}
通脹率: ${(result.inflationRate * 100).toFixed(1)}%
年數: ${result.years}年

未來價值: $${result.futureValue.toLocaleString()}
購買力損失: $${result.loss.toLocaleString()}

(相等於今日既: $${result.currentAmount.toLocaleString()})
`;
};

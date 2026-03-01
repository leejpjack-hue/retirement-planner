// Historical Data & Time Machine Calculator
// 使用1990s-2000s數據模擬

// 香港歷史數據 (1980-2025) - 更加多歷史年份
export const historicalData = {
  // 香港通脹率 (年均) - 1980s開始
  inflation: {
    1980: 11.2, 1981: 15.4, 1982: 10.3, 1983: 9.9, 1984: 8.3,
    1985: 6.7, 1986: 3.8, 1987: 5.5, 1988: 7.8, 1989: 10.2,
    1990: 10.5, 1991: 11.2, 1992: 9.4, 1993: 8.8, 1994: 9.3,
    1995: 8.7, 1996: 6.0, 1997: 5.8, 1998: 2.8, 1999: -4.0,
    2000: -3.8, 2001: -2.0, 2002: -2.6, 2003: -2.4, 2004: 0.4,
    2005: 1.1, 2006: 2.0, 2007: 2.0, 2008: 4.4, 2009: 0.6,
    2010: 2.8, 2011: 5.3, 2012: 3.4, 2013: 4.3, 2014: 4.4,
    2015: 2.4, 2016: 1.9, 2017: 1.7, 2018: 2.4, 2019: 2.9,
    2020: 0.3, 2021: 1.6, 2022: 4.0, 2023: 2.1, 2024: 2.5, 2025: 3.0,
  },
  
  // 香港恒生指數年結 (年底收市) - 1980s開始
  hsi: {
    1980: 938, 1981: 1405, 1982: 783, 1983: 1084, 1984: 1200,
    1985: 1752, 1986: 1963, 1987: 2302, 1988: 2686, 1989: 4537,
    1990: 3024, 1991: 4297, 1992: 5512, 1993: 11888, 1994: 10073,
    1995: 10073, 1996: 13451, 1997: 18223, 1998: 10048, 1999: 16962,
    2000: 15095, 2001: 11397, 2002: 9327, 2003: 12576, 2004: 14031,
    2005: 14877, 2006: 19966, 2007: 27812, 2008: 14312, 2009: 21872,
    2010: 23035, 2011: 18434, 2012: 22656, 2013: 23976, 2014: 25052,
    2015: 21914, 2016: 22000, 2017: 29919, 2018: 25845, 2019: 28189,
    2020: 27231, 2021: 23397, 2022: 19781, 2023: 17431, 2024: 20000, 2025: 22000,
  },
  
  // 樓價指數 (1980=100) - 更加多細節
  propertyIndex: {
    1980: 100, 1981: 120, 1982: 135, 1983: 145, 1984: 150,
    1985: 155, 1986: 165, 1987: 185, 1988: 210, 1989: 250,
    1990: 230, 1991: 235, 1992: 250, 1993: 320, 1994: 380,
    1995: 100, 1996: 118, 1997: 150, 1998: 92, 1999: 89,
    2000: 92, 2001: 90, 2002: 87, 2003: 86, 2004: 92,
    2005: 102, 2006: 115, 2007: 135, 2008: 140, 2009: 145,
    2010: 165, 2011: 180, 2012: 190, 2013: 210, 2014: 230,
    2015: 245, 2016: 260, 2017: 290, 2018: 300, 2019: 310,
    2020: 315, 2021: 330, 2022: 340, 2023: 320, 2024: 310, 2025: 330,
  },
  
  // MPF回報 (年均%) - 1995年開始
  mpfReturn: {
    1995: 8.0, 1996: 12.0, 1997: 15.0, 1998: -8.0, 1999: 10.0,
    2000: 8.0, 2001: -4.0, 2002: -2.0, 2003: 18.0, 2004: 10.0,
    2005: 6.0, 2006: 15.0, 2007: 12.0, 2008: -18.0, 2009: 15.0,
    2010: 8.0, 2011: -3.0, 2012: 8.0, 2013: 12.0, 2014: 6.0,
    2015: -2.0, 2016: 4.0, 2017: 15.0, 2018: -4.0, 2019: 12.0,
    2020: 10.0, 2021: 8.0, 2022: -12.0, 2023: 8.0, 2024: 6.0, 2025: 7.0,
  },
  
  // 典型工資 (月薪HKD) - 1980s開始
  averageWage: {
    1980: 2500, 1981: 3000, 1982: 3500, 1983: 3800, 1984: 4200,
    1985: 4800, 1986: 5500, 1987: 6500, 1988: 7500, 1989: 8500,
    1990: 9000, 1991: 9500, 1992: 10000, 1993: 11000, 1994: 11500,
    1995: 10000, 1996: 11000, 1997: 12500, 1998: 13000, 1999: 12500,
    2000: 12800, 2001: 13000, 2002: 12800, 2003: 13000, 2004: 13500,
    2005: 14000, 2006: 15000, 2007: 16500, 2008: 17500, 2009: 17000,
    2010: 18000, 2011: 19500, 2012: 20000, 2013: 21000, 2014: 22500,
    2015: 24000, 2016: 25000, 2017: 26500, 2018: 28000, 2019: 29500,
    2020: 30000, 2021: 31000, 2022: 32000, 2023: 33000, 2024: 34000, 2025: 35000,
  },
  
  // 退休生活成本 (每月HKD) - 1980s開始
  retirementCost: {
    1980: 1500, 1981: 1800, 1982: 2000, 1983: 2200, 1984: 2500,
    1985: 2800, 1986: 3000, 1987: 3500, 1988: 4000, 1989: 5000,
    1990: 5500, 1991: 6000, 1992: 6500, 1993: 7500, 1994: 8000,
    1995: 8500, 1996: 9000, 1997: 10000, 1998: 9500, 1999: 9000,
    2000: 8800, 2001: 8500, 2002: 8200, 2003: 8000, 2004: 8200,
    2005: 8500, 2006: 9000, 2007: 10000, 2008: 11000, 2009: 10500,
    2010: 11000, 2011: 12000, 2012: 12500, 2013: 13000, 2014: 14000,
    2015: 14500, 2016: 15000, 2017: 16000, 2018: 17000, 2019: 18000,
    2020: 17500, 2021: 18000, 2022: 19000, 2023: 20000, 2024: 21000, 2025: 22000,
  },
};

export interface TimeMachineInput {
  startYear: number;
  startAge: number;
  monthlySavings: number;
  savingsYears: number;
  retirementAge: number;
}

export interface TimeMachineYearResult {
  year: number;
  age: number;
  savingsStart: number;
  contribution: number;
  mpfReturn: number;
  compoundValue: number;
  inflation: number;
  cumulativeInflation: number;
  realValue: number;
  hsi: number;
  propertyIndex: number;
}

export interface TimeMachineSummary {
  startYear: number;
  endYear: number;
  totalContributed: number;
  finalValue: number;
  nominalGain: number;
  realValueAfterInflation: number;
  hsiReturn: number;
  propertyReturn: number;
}

export interface TimeMachineScenario {
  scenario: string;
  monthlyAtRetirement: number;
  totalAtRetirement: number;
  qualityOfLife: 'good' | 'moderate' | 'basic' | 'poor';
  details?: {
    housing: string;
    food: string;
    transport: string;
    leisure: string;
    medical: string;
  };
}

export interface TimeMachineExtraAnalysis {
  propertyValueIfInvested: number;
  hsiValueIfInvested: number;
  totalInflationMultiplier: number;
  averageAnnualReturn: number;
  yearsCanAfford: number;
}

export interface TimeMachineResult {
  yearByYear: TimeMachineYearResult[];
  summary: TimeMachineSummary;
  scenarios: TimeMachineScenario[];
  extraAnalysis?: TimeMachineExtraAnalysis;
}

// Time Machine Calculation
export const calculateTimeMachine = (input: TimeMachineInput): TimeMachineResult => {
  const { startYear, startAge, monthlySavings, savingsYears } = input;
  
  const results = [];
  let totalSavings = 0;
  let cumulativeInflation = 1;
  
  const currentYear = new Date().getFullYear();
  const retirementAge = 65;
  
  for (let year = startYear; year < startYear + savingsYears && year <= currentYear; year++) {
    const age = startAge + (year - startYear);
    const annualContribution = monthlySavings * 12;
    const mpfReturn = (historicalData.mpfReturn[year as keyof typeof historicalData.mpfReturn] || 5) / 100;
    const inflation = (historicalData.inflation[year as keyof typeof historicalData.inflation] || 3) / 100;
    
    // 計算複利
    totalSavings = (totalSavings + annualContribution) * (1 + mpfReturn);
    
    // 通脹調整
    cumulativeInflation *= (1 + inflation);
    const realValue = totalSavings / cumulativeInflation;
    
    results.push({
      year,
      age,
      savingsStart: year === startYear ? monthlySavings * 12 : 0,
      contribution: annualContribution,
      mpfReturn: mpfReturn * 100,
      compoundValue: Math.round(totalSavings),
      inflation: inflation * 100,
      cumulativeInflation,
      realValue: Math.round(realValue),
      hsi: historicalData.hsi[year as keyof typeof historicalData.hsi] || 20000,
      propertyIndex: historicalData.propertyIndex[year as keyof typeof historicalData.propertyIndex] || 100,
    });
  }
  
  // Summary
  const endYear = startYear + savingsYears;
  const totalContributed = monthlySavings * 12 * savingsYears;
  const nominalGain = totalSavings - totalContributed;
  const finalValue = results[results.length - 1]?.compoundValue || 0;
  
  // 退休後每月可以拎幾多 (4% rule)
  const monthlyAtRetirement = (finalValue * 0.04) / 12;
  
  // 2025年退休生活成本
  const retirementCost2025 = historicalData.retirementCost[2025];
  
  // 詳細生活質素分析
  const getQuality = (monthly: number): 'good' | 'moderate' | 'basic' | 'poor' => {
    const ratio = monthly / retirementCost2025;
    if (ratio >= 1.5) return 'good';
    if (ratio >= 1.0) return 'moderate';
    if (ratio >= 0.7) return 'basic';
    return 'poor';
  };
  
  // 詳細 scenarios
  const scenarios: TimeMachineScenario[] = [
    {
      scenario: '🐕 慳儉退休',
      monthlyAtRetirement: monthlyAtRetirement * 0.5,
      totalAtRetirement: finalValue * 0.5,
      qualityOfLife: getQuality(monthlyAtRetirement * 0.5),
      details: {
        housing: '公屋/細單位',
        food: '自己煮為主',
        transport: '公共交通',
        leisure: '免費活動',
        medical: '普通醫療',
      },
    },
    {
      scenario: '🏠 普通退休',
      monthlyAtRetirement: monthlyAtRetirement,
      totalAtRetirement: finalValue,
      qualityOfLife: getQuality(monthlyAtRetirement),
      details: {
        housing: '私人屋苑',
        food: '間中去餐廳',
        transport: '有車接送',
        leisure: '旅行/興趣班',
        medical: '私家醫院',
      },
    },
    {
      scenario: '🏖️ 舒適退休',
      monthlyAtRetirement: monthlyAtRetirement * 1.5,
      totalAtRetirement: finalValue * 1.5,
      qualityOfLife: getQuality(monthlyAtRetirement * 1.5),
      details: {
        housing: '豪宅/海外物业',
        food: '周圍食好嘢',
        transport: '揸車/的士',
        leisure: '環遊世界',
        medical: '高端醫療',
      },
    },
    {
      scenario: '💰 富裕退休',
      monthlyAtRetirement: monthlyAtRetirement * 2.5,
      totalAtRetirement: finalValue * 2.5,
      qualityOfLife: 'good',
      details: {
        housing: '別墅/投資收租',
        food: '米芝蓮餐廳',
        transport: '司機',
        leisure: '私人飛機/遊艇',
        medical: '全球頂級醫療',
      },
    },
  ];
  
  //額外分析
  const property2025 = historicalData.propertyIndex[2025 as keyof typeof historicalData.propertyIndex] || 330;
  const propertyStart = historicalData.propertyIndex[startYear as keyof typeof historicalData.propertyIndex] || 100;
  const hsi2025 = historicalData.hsi[2025 as keyof typeof historicalData.hsi] || 22000;
  const hsiStart = historicalData.hsi[startYear as keyof typeof historicalData.hsi] || 10000;
  
  const extraAnalysis = {
    // 如果當時將相同錢買樓
    propertyValueIfInvested: totalContributed * (property2025 / propertyStart),
    // 如果當時買恒生指數
    hsiValueIfInvested: totalContributed * (hsi2025 / hsiStart),
    // 總通脹倍數
    totalInflationMultiplier: cumulativeInflation,
    // 每年平均回報
    averageAnnualReturn: savingsYears > 0 ? ((finalValue / totalContributed) ** (1 / savingsYears) - 1) * 100 : 0,
    // 退休時應付年數
    yearsCanAfford: Math.floor(finalValue / (monthlyAtRetirement * 12)),
  };
  
  return {
    yearByYear: results,
    summary: {
      startYear,
      endYear,
      totalContributed,
      finalValue: Math.round(finalValue),
      nominalGain: Math.round(nominalGain),
      realValueAfterInflation: Math.round(finalValue / cumulativeInflation),
      hsiReturn: extraAnalysis.hsiValueIfInvested,
      propertyReturn: extraAnalysis.propertyValueIfInvested,
    },
    scenarios,
    extraAnalysis,
  };
};

// Helper function to format currency
export const formatHK = (amount: number): string => {
  return `HK$${amount.toLocaleString()}`;
};

// Export utilities for Retirement Planner
import type { DetailedResult, UserState } from '../types';

export const exportToCSV = (result: DetailedResult, state: UserState): void => {
  const rows = [
    ['退休規劃報告'],
    ['生成日期', new Date().toLocaleDateString('zh-HK')],
    [],
    ['基本資料'],
    ['退休城市', result.cityName],
    ['貨幣', result.currency],
    ['通脹率', `${(result.inflationRate * 100).toFixed(1)}%`],
    ['稅率', `${(result.taxRate * 100).toFixed(1)}%`],
    [],
    ['當前每月支出'],
    ['總支出', `$${result.currentMonthly.toLocaleString()}`],
    ['飲食', `$${result.monthlyFood.toLocaleString()}`],
    ['交通', `$${result.monthlyTransport.toLocaleString()}`],
    ['住宿', `$${result.monthlyHousing.toLocaleString()}`],
    ['水電', `$${result.monthlyUtility.toLocaleString()}`],
    ['生活娛樂', `$${result.monthlyLifestyle.toLocaleString()}`],
    ['醫療', `$${result.monthlyMedical.toLocaleString()}`],
    ['教育', `$${result.monthlyEducation?.toLocaleString() || 0}`],
    ['保險', `$${result.monthlyInsurance?.toLocaleString() || 0}`],
    [],
    ['退休後每月支出 (通脹調整後)'],
    ['總支出', `$${Math.round(result.futureMonthly).toLocaleString()}`],
    ['飲食', `$${Math.round(result.futureFood).toLocaleString()}`],
    ['交通', `$${Math.round(result.futureTransport).toLocaleString()}`],
    ['住宿', `$${Math.round(result.futureHousing).toLocaleString()}`],
    ['水電', `$${Math.round(result.futureUtility).toLocaleString()}`],
    ['生活娛樂', `$${Math.round(result.futureLifestyle).toLocaleString()}`],
    ['醫療', `$${Math.round(result.futureMedical).toLocaleString()}`],
    ['教育', `$${Math.round(result.futureEducation || 0).toLocaleString()}`],
    ['保險', `$${Math.round(result.futureInsurance || 0).toLocaleString()}`],
    [],
    ['退休規劃結果'],
    ['總儲蓄目標', `$${Math.round(result.totalNeeded).toLocaleString()}`],
    ['連稅務', `$${Math.round(result.totalWithTax).toLocaleString()}`],
    ['每月需要儲蓄', `$${Math.round(result.monthlySavings).toLocaleString()}`],
    ['距離退休', `${result.yearsToRetire}年`],
    [],
    ['房產情況'],
    ['住房類型', result.housingType],
    ['資產價值', `$${result.propertyAsset.toLocaleString()}`],
  ];

  const csvContent = rows.map(row => row.join(',')).join('\n');
  downloadFile(csvContent, 'retirement_report.csv', 'text/csv');
};

export const exportToText = (result: DetailedResult, state: UserState): void => {
  const content = `
==========================================
        退休規劃報告
==========================================

📅 生成日期: ${new Date().toLocaleDateString('zh-HK')}

📍 基本資料
------------------------------------------
退休城市: ${result.cityName}
貨幣: ${result.currency}
通脹率: ${(result.inflationRate * 100).toFixed(1)}%
稅率: ${(result.taxRate * 100).toFixed(1)}%

💰 當前每月支出
------------------------------------------
總支出: $${result.currentMonthly.toLocaleString()}
飲食: $${result.monthlyFood.toLocaleString()}
交通: $${result.monthlyTransport.toLocaleString()}
住宿: $${result.monthlyHousing.toLocaleString()}
水電: $${result.monthlyUtility.toLocaleString()}
生活娛樂: $${result.monthlyLifestyle.toLocaleString()}
醫療: $${result.monthlyMedical.toLocaleString()}
教育: $${result.monthlyEducation?.toLocaleString() || 0}
保險: $${result.monthlyInsurance?.toLocaleString() || 0}

🚀 退休後每月支出 (通脹調整後)
------------------------------------------
總支出: $${Math.round(result.futureMonthly).toLocaleString()}
飲食: $${Math.round(result.futureFood).toLocaleString()}
交通: $${Math.round(result.futureTransport).toLocaleString()}
住宿: $${Math.round(result.futureHousing).toLocaleString()}
水電: $${Math.round(result.futureUtility).toLocaleString()}
生活娛樂: $${Math.round(result.futureLifestyle).toLocaleString()}
醫療: $${Math.round(result.futureMedical).toLocaleString()}
教育: $${Math.round(result.futureEducation || 0).toLocaleString()}
保險: $${Math.round(result.futureInsurance || 0).toLocaleString()}

🎯 退休規劃結果
------------------------------------------
總儲蓄目標: $${Math.round(result.totalNeeded).toLocaleString()}
連稅務: $${Math.round(result.totalWithTax).toLocaleString()}
每月需要儲蓄: $${Math.round(result.monthlySavings).toLocaleString()}
距離退休: ${result.yearsToRetire}年

🏠 房產情況
------------------------------------------
住房類型: ${result.housingType}
資產價值: $${result.propertyAsset.toLocaleString()}

==========================================
     退休規劃應用 © 2026
==========================================
`;

  downloadFile(content, 'retirement_report.txt', 'text/plain');
};

const downloadFile = (content: string, filename: string, type: string): void => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

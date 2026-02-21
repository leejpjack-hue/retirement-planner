// Types for Retirement Planner

export interface UserState {
  currentCity: string;
  retireCity: string;
  age: number;
  food: number;
  travel: number;
  transport: number;
  hobbies: number;
}

export interface CalculationResult {
  totalNeeded: number;
  monthlyNeed: number;
  inflationRate: number;
  savingsNeed: number;
  yearsToRetire: number;
  localAmount: number;
  currency: string;
}

export interface DetailedResult {
  // Current expenses
  currentMonthly: number;
  monthlyFood: number;
  monthlyTransport: number;
  monthlyHousing: number;
  monthlyUtility: number;
  monthlyLifestyle: number;
  
  // Future expenses (at retirement)
  futureMonthly: number;
  futureFood: number;
  futureTransport: number;
  futureHousing: number;
  futureUtility: number;
  futureLifestyle: number;
  
  // Summary
  totalNeeded: number;
  totalWithTax: number;
  monthlySavings: number;
  yearsToRetire: number;
  inflationRate: number;
  taxRate: number;
  
  // City info
  cityName: string;
  currency: string;
  cityRate: number;
}

export interface LifestyleOption {
  value: number;
  icon: string;
  label: string;
  labelEn: string;
}

export const lifestyleOptions = {
  food: [
    { value: 1.0, icon: '🏠', label: '屋企煮', labelEn: 'Home cook' },
    { value: 1.3, icon: '🥡', label: '外賣', labelEn: 'Delivery' },
    { value: 1.6, icon: '🍜', label: '出去食', labelEn: 'Dining out' },
    { value: 2.0, icon: '🍷', label: '周圍食', labelEn: 'Fine dining' },
  ],
  travel: [
    { value: 1.0, icon: '🏠', label: '唔常去', labelEn: 'Rarely' },
    { value: 1.3, icon: '🧳', label: '每年1-2', labelEn: '1-2/year' },
    { value: 1.6, icon: '🌍', label: '每年3-4', labelEn: '3-4/year' },
    { value: 2.0, icon: '🛫', label: '話走就走', labelEn: 'Anytime' },
  ],
  transport: [
    { value: 0.8, icon: '🚇', label: '公共交通', labelEn: 'Transit' },
    { value: 1.0, icon: '🚶', label: '行路', labelEn: 'Walk' },
    { value: 1.5, icon: '🚗', label: '揸車', labelEn: 'Drive' },
    { value: 2.0, icon: '🚕', label: '的士', labelEn: 'Taxi' },
  ],
  hobbies: [
    { value: 0.8, icon: '📺', label: '睇電視', labelEn: 'TV' },
    { value: 1.0, icon: '🎨', label: '學嘢', labelEn: 'Learn' },
    { value: 1.3, icon: '🏃', label: '運動', labelEn: 'Sports' },
    { value: 1.6, icon: '🛳️', label: '旅行', labelEn: 'Travel' },
  ],
};

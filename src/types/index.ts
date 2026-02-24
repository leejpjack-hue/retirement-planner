// Types for Retirement Planner

export interface UserState {
  currentCity: string;
  retireCity: string;
  age: number;
  
  // Food habits
  food: number;           // home/cooking level
  cuisineType: number;    // Japanese/Western/Chinese/etc
  
  // Travel
  travel: number;
  
  // Transport
  transport: number;
  
  // Hobbies
  hobbies: number;
  
  // Housing - OWN or RENT
  housing: 'own' | 'rent' | 'family';
  
  // Assets (for those who own property)
  hasProperty: boolean;
  propertyValue: number;  // in local currency
  
  // Medical
  medical: number;       // 1-4 level of medical care needed
  
  // Education (for children)
  hasChildren: boolean;
  childrenCount: number;
  educationLevel: number; // 1-3 (primary, secondary, university)
  
  // Insurance
  hasInsurance: boolean;
  insuranceType: number; // 1-3 (basic, standard, premium)
  insurancePremium: number; // monthly premium
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
  monthlyMedical: number;
  monthlyEducation: number;
  monthlyInsurance: number;
  
  // Future expenses (at retirement)
  futureMonthly: number;
  futureFood: number;
  futureTransport: number;
  futureHousing: number;
  futureUtility: number;
  futureLifestyle: number;
  futureMedical: number;
  futureEducation: number;
  futureInsurance: number;
  
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
  
  // Housing
  housingType: string;
  propertyAsset: number;
}

export interface LifestyleOption {
  value: number;
  icon: string;
  label: string;
  labelEn: string;
}

export const lifestyleOptions = {
  // Food cooking level
  food: [
    { value: 1.0, icon: '🏠', label: '屋企煮', labelEn: 'Home cook' },
    { value: 1.3, icon: '🥡', label: '外賣', labelEn: 'Delivery' },
    { value: 1.6, icon: '🍜', label: '出去食', labelEn: 'Dining out' },
    { value: 2.0, icon: '🍷', label: '周圍食', labelEn: 'Fine dining' },
  ],
  
  // Cuisine type
  cuisine: [
    { value: 1.0, icon: '🍳', label: '家常菜', labelEn: 'Home style' },
    { value: 1.2, icon: '🥢', label: '中菜', labelEn: 'Chinese' },
    { value: 1.4, icon: '🍣', label: '日本嘢', labelEn: 'Japanese' },
    { value: 1.5, icon: '🍕', label: '西餐', labelEn: 'Western' },
    { value: 1.6, icon: '🌍', label: '各國菜', labelEn: 'International' },
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
  
  // Medical care level
  medical: [
    { value: 0.8, icon: '💊', label: '基本', labelEn: 'Basic' },
    { value: 1.0, icon: '🩺', label: '普通', labelEn: 'Regular' },
    { value: 1.3, icon: '🏥', label: '私家醫院', labelEn: 'Private' },
    { value: 1.6, icon: '👨‍⚕️', label: '全面保障', labelEn: 'Premium' },
  ],
  
  // Housing
  housing: [
    { value: 1.0, icon: '🏠', label: '自置物业', labelEn: 'Own' },
    { value: 1.3, icon: '🔑', label: '租樓', labelEn: 'Rent' },
    { value: 0.5, icon: '👨‍👩‍👧', label: '同屋企住', labelEn: 'Family' },
  ],
  
  // Education (for children)
  education: [
    { value: 0, icon: '🎓', label: '無小朋友', labelEn: 'No children' },
    { value: 1.0, icon: '🏫', label: '基礎教育', labelEn: 'Primary/Secondary' },
    { value: 1.5, icon: '🎒', label: '大學教育', labelEn: 'University' },
    { value: 2.0, icon: '🌍', label: '國際學校', labelEn: 'International' },
  ],
  
  // Insurance
  insurance: [
    { value: 0, icon: '❌', label: '無醫保', labelEn: 'No insurance' },
    { value: 0.8, icon: '🏥', label: '基本醫保', labelEn: 'Basic' },
    { value: 1.0, icon: '🛡️', label: '標準醫保', labelEn: 'Standard' },
    { value: 1.3, icon: '⭐', label: '高端醫保', labelEn: 'Premium' },
  ],
};

// City Data for Retirement Planner - with detailed expenses

export interface CityExpense {
  food: number;      // Monthly food expense
  transport: number;  // Monthly transport
  housing: number;    // Monthly housing (for reference)
  dining: number;    // Monthly dining out
}

export interface City {
  id: string;
  name: string;
  nameEn: string;
  flag: string;
  monthlyUSD: number;
  inflation: number;
  currency: string;
  rate: number;
  expenses: CityExpense;
  source: string;
}

export const cities: City[] = [
  {
    id: 'hong_kong',
    name: '香港',
    nameEn: 'Hong Kong',
    flag: '🇭🇰',
    monthlyUSD: 1500,
    inflation: 2.4,
    currency: 'HKD',
    rate: 7.82,
    source: 'Numbeo 2024',
    expenses: {
      food: 500,       //超市買餸
      transport: 80,    //港鐵月票
      housing: 1500,   //市區唐樓
      dining: 800,     //出街食
    },
  },
  {
    id: 'taipei',
    name: '台北',
    nameEn: 'Taipei',
    flag: '🇹🇼',
    monthlyUSD: 800,
    inflation: 2.0,
    currency: 'TWD',
    rate: 31.5,
    source: 'Numbeo 2024',
    expenses: {
      food: 350,
      transport: 40,
      housing: 500,
      dining: 450,
    },
  },
  {
    id: 'shanghai',
    name: '上海',
    nameEn: 'Shanghai',
    flag: '🇨🇳',
    monthlyUSD: 900,
    inflation: 2.5,
    currency: 'CNY',
    rate: 7.24,
    source: 'Numbeo 2024',
    expenses: {
      food: 400,
      transport: 50,
      housing: 800,
      dining: 500,
    },
  },
  {
    id: 'singapore',
    name: '新加坡',
    nameEn: 'Singapore',
    flag: '🇸🇬',
    monthlyUSD: 1600,
    inflation: 3.0,
    currency: 'SGD',
    rate: 1.34,
    source: 'Numbeo 2024',
    expenses: {
      food: 400,
      transport: 100,
      housing: 1200,
      dining: 600,
    },
  },
  {
    id: 'tokyo',
    name: '東京',
    nameEn: 'Tokyo',
    flag: '🇯🇵',
    monthlyUSD: 1400,
    inflation: 2.8,
    currency: 'JPY',
    rate: 149.5,
    source: 'Numbeo 2024',
    expenses: {
      food: 450,
      transport: 100,
      housing: 900,
      dining: 600,
    },
  },
  {
    id: 'new_york',
    name: '紐約',
    nameEn: 'New York',
    flag: '🇺🇸',
    monthlyUSD: 2500,
    inflation: 3.2,
    currency: 'USD',
    rate: 1,
    source: 'Numbeo 2024',
    expenses: {
      food: 600,
      transport: 130,
      housing: 2200,
      dining: 800,
    },
  },
  {
    id: 'bangkok',
    name: '曼谷',
    nameEn: 'Bangkok',
    flag: '🇹🇭',
    monthlyUSD: 600,
    inflation: 2.2,
    currency: 'THB',
    rate: 35.2,
    source: 'Numbeo 2024',
    expenses: {
      food: 250,
      transport: 50,
      housing: 400,
      dining: 300,
    },
  },
  {
    id: 'kuala_lumpur',
    name: '吉隆坡',
    nameEn: 'Kuala Lumpur',
    flag: '🇲🇾',
    monthlyUSD: 500,
    inflation: 2.0,
    currency: 'MYR',
    rate: 4.72,
    source: 'Numbeo 2024',
    expenses: {
      food: 200,
      transport: 50,
      housing: 350,
      dining: 250,
    },
  },
  {
    id: 'lisbon',
    name: '里斯本',
    nameEn: 'Lisbon',
    flag: '🇵🇹',
    monthlyUSD: 900,
    inflation: 2.5,
    currency: 'EUR',
    rate: 0.92,
    source: 'Numbeo 2024',
    expenses: {
      food: 300,
      transport: 50,
      housing: 700,
      dining: 400,
    },
  },
  {
    id: 'mexico_city',
    name: '墨西哥城',
    nameEn: 'Mexico City',
    flag: '🇲🇽',
    monthlyUSD: 700,
    inflation: 4.0,
    currency: 'USD',
    rate: 1,
    source: 'Numbeo 2024',
    expenses: {
      food: 200,
      transport: 40,
      housing: 500,
      dining: 250,
    },
  },
];

export const getCityById = (id: string): City | undefined => {
  return cities.find((city) => city.id === id);
};

export const currentCities = cities.slice(0, 6); // 香港、台北、上海、新加坡、東京、紐約
export const retireCities = cities.slice(0, 6); // 可用作退休城市

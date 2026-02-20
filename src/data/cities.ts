// City Data for Retirement Planner

export interface City {
  id: string;
  name: string;
  nameEn: string;
  flag: string;
  monthlyUSD: number;
  inflation: number;
  currency: string;
  rate: number;
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
  },
];

export const getCityById = (id: string): City | undefined => {
  return cities.find((city) => city.id === id);
};

export const currentCities = cities.slice(0, 6); // 香港、台北、上海、新加坡、東京、紐約
export const retireCities = cities.slice(0, 6); // 可用作退休城市

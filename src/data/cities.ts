// City Data for Retirement Planner - Detailed expenses

export interface CityExpense {
  food: {
    home: number;     // 屋企煮
    delivery: number; // 外賣
    dining: number;  // 出街食
    fine: number;    // 周圍食/fine dining
  };
  transport: {
    public: number;   // 公共交通
    walk: number;    // 行路
    car: number;     // 揸車
    taxi: number;    // 的士
  };
  housing: {
    rent: number;     // 租金
    utility: number; // 水電煤
    maintenance: number; // 維修
  };
  lifestyle: {
    tv: number;       // 睇電視/上網
    learn: number;    // 學嘢/興趣班
    sports: number;  // 運動
    travel: number;  // 旅行
  };
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
  tax: number;       // 個人所得稅 %
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
    tax: 15,  // 薪俸稅最高15%
    source: 'Numbeo 2024 / Gov Census',
    expenses: {
      food: {
        home: 500,
        delivery: 650,
        dining: 800,
        fine: 1000,
      },
      transport: {
        public: 80,
        walk: 20,
        car: 2500,
        taxi: 3000,
      },
      housing: {
        rent: 15000,
        utility: 1500,
        maintenance: 500,
      },
      lifestyle: {
        tv: 500,
        learn: 800,
        sports: 1500,
        travel: 10000,
      },
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
    tax: 20,  // 綜合所得稅最高20%
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 350,
        delivery: 450,
        dining: 600,
        fine: 900,
      },
      transport: {
        public: 40,
        walk: 10,
        car: 800,
        taxi: 1200,
      },
      housing: {
        rent: 15000,
        utility: 2000,
        maintenance: 500,
      },
      lifestyle: {
        tv: 400,
        learn: 600,
        sports: 1000,
        travel: 8000,
      },
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
    tax: 35,  // 個人所得稅最高35%
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 400,
        delivery: 500,
        dining: 700,
        fine: 1000,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 1000,
        taxi: 1500,
      },
      housing: {
        rent: 5000,
        utility: 500,
        maintenance: 300,
      },
      lifestyle: {
        tv: 300,
        learn: 500,
        sports: 800,
        travel: 10000,
      },
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
    tax: 22,  // 最高22%
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 400,
        delivery: 500,
        dining: 600,
        fine: 900,
      },
      transport: {
        public: 100,
        walk: 20,
        car: 1500,
        taxi: 2000,
      },
      housing: {
        rent: 2200,
        utility: 200,
        maintenance: 150,
      },
      lifestyle: {
        tv: 400,
        learn: 600,
        sports: 800,
        travel: 8000,
      },
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
    tax: 45,  // 最高45%
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 450,
        delivery: 600,
        dining: 800,
        fine: 1200,
      },
      transport: {
        public: 100,
        walk: 20,
        car: 10000,
        taxi: 15000,
      },
      housing: {
        rent: 80000,
        utility: 15000,
        maintenance: 5000,
      },
      lifestyle: {
        tv: 5000,
        learn: 8000,
        sports: 10000,
        travel: 150000,
      },
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
    tax: 37,  // 聯邦稅最高37%
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 600,
        delivery: 800,
        dining: 1000,
        fine: 1500,
      },
      transport: {
        public: 130,
        walk: 20,
        car: 800,
        taxi: 1200,
      },
      housing: {
        rent: 3000,
        utility: 200,
        maintenance: 100,
      },
      lifestyle: {
        tv: 100,
        learn: 200,
        sports: 200,
        travel: 3000,
      },
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
    tax: 35,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 250,
        delivery: 300,
        dining: 400,
        fine: 600,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 500,
        taxi: 600,
      },
      housing: {
        rent: 12000,
        utility: 3000,
        maintenance: 500,
      },
      lifestyle: {
        tv: 400,
        learn: 500,
        sports: 800,
        travel: 8000,
      },
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
    tax: 30,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 200,
        delivery: 250,
        dining: 350,
        fine: 500,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 400,
        taxi: 500,
      },
      housing: {
        rent: 1500,
        utility: 300,
        maintenance: 100,
      },
      lifestyle: {
        tv: 150,
        learn: 300,
        sports: 500,
        travel: 5000,
      },
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
    tax: 48,  // 最高48%
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 300,
        delivery: 400,
        dining: 500,
        fine: 800,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 600,
        taxi: 800,
      },
      housing: {
        rent: 900,
        utility: 150,
        maintenance: 50,
      },
      lifestyle: {
        tv: 40,
        learn: 60,
        sports: 50,
        travel: 1000,
      },
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
    tax: 30,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 200,
        delivery: 250,
        dining: 350,
        fine: 500,
      },
      transport: {
        public: 40,
        walk: 10,
        car: 300,
        taxi: 400,
      },
      housing: {
        rent: 800,
        utility: 80,
        maintenance: 50,
      },
      lifestyle: {
        tv: 50,
        learn: 80,
        sports: 80,
        travel: 1500,
      },
    },
  },
];

export const getCityById = (id: string): City | undefined => {
  return cities.find((city) => city.id === id);
};

export const currentCities = cities.slice(0, 6);
export const retireCities = cities.slice(0, 6);

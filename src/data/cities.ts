// City Data for Retirement Planner - Detailed expenses

export interface CityExpense {
  food: {
    home: number;       // 屋企煮
    delivery: number;   // 外賣
    dining: number;     // 出街食
    fine: number;       // 周圍食/fine dining
  };
  cuisine: {
    chinese: number;    // 中菜
    japanese: number;   // 日本嘢
    western: number;    // 西餐
    international: number; // 各國菜
  };
  transport: {
    public: number;     // 公共交通
    walk: number;       // 行路
    car: number;        // 揸車
    taxi: number;       // 的士
  };
  housing: {
    rent: number;       // 租金
    mortgage: number;   // 按揭
    utility: number;    // 水電煤
    maintenance: number;// 維修
  };
  medical: {
    basic: number;      // 基本體檢/藥物
    regular: number;    // 普通門診
    private: number;    // 私家醫院
    premium: number;    // 全面保障
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
  tax: number;
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
    tax: 15,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 500,
        delivery: 650,
        dining: 800,
        fine: 1000,
      },
      cuisine: {
        chinese: 600,
        japanese: 800,
        western: 900,
        international: 1000,
      },
      transport: {
        public: 80,
        walk: 20,
        car: 2500,
        taxi: 3000,
      },
      housing: {
        rent: 15000,
        mortgage: 18000,
        utility: 1500,
        maintenance: 500,
      },
      medical: {
        basic: 300,
        regular: 800,
        private: 2000,
        premium: 4000,
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
    tax: 20,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 350,
        delivery: 450,
        dining: 600,
        fine: 900,
      },
      cuisine: {
        chinese: 500,
        japanese: 700,
        western: 800,
        international: 900,
      },
      transport: {
        public: 40,
        walk: 10,
        car: 800,
        taxi: 1200,
      },
      housing: {
        rent: 15000,
        mortgage: 18000,
        utility: 2000,
        maintenance: 500,
      },
      medical: {
        basic: 200,
        regular: 500,
        private: 1500,
        premium: 3000,
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
    tax: 35,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 400,
        delivery: 500,
        dining: 700,
        fine: 1000,
      },
      cuisine: {
        chinese: 500,
        japanese: 800,
        western: 900,
        international: 1000,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 1000,
        taxi: 1500,
      },
      housing: {
        rent: 5000,
        mortgage: 6000,
        utility: 500,
        maintenance: 300,
      },
      medical: {
        basic: 200,
        regular: 500,
        private: 1500,
        premium: 3000,
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
    tax: 22,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 400,
        delivery: 500,
        dining: 600,
        fine: 900,
      },
      cuisine: {
        chinese: 500,
        japanese: 700,
        western: 800,
        international: 900,
      },
      transport: {
        public: 100,
        walk: 20,
        car: 1500,
        taxi: 2000,
      },
      housing: {
        rent: 2200,
        mortgage: 2500,
        utility: 200,
        maintenance: 150,
      },
      medical: {
        basic: 150,
        regular: 400,
        private: 1200,
        premium: 2500,
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
    tax: 45,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 450,
        delivery: 600,
        dining: 800,
        fine: 1200,
      },
      cuisine: {
        chinese: 600,
        japanese: 700,
        western: 900,
        international: 1000,
      },
      transport: {
        public: 100,
        walk: 20,
        car: 10000,
        taxi: 15000,
      },
      housing: {
        rent: 80000,
        mortgage: 90000,
        utility: 15000,
        maintenance: 5000,
      },
      medical: {
        basic: 5000,
        regular: 10000,
        private: 25000,
        premium: 50000,
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
    tax: 37,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 600,
        delivery: 800,
        dining: 1000,
        fine: 1500,
      },
      cuisine: {
        chinese: 800,
        japanese: 1000,
        western: 1200,
        international: 1500,
      },
      transport: {
        public: 130,
        walk: 20,
        car: 800,
        taxi: 1200,
      },
      housing: {
        rent: 3000,
        mortgage: 3500,
        utility: 200,
        maintenance: 100,
      },
      medical: {
        basic: 100,
        regular: 300,
        private: 800,
        premium: 1500,
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
      cuisine: {
        chinese: 350,
        japanese: 500,
        western: 600,
        international: 700,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 500,
        taxi: 600,
      },
      housing: {
        rent: 12000,
        mortgage: 14000,
        utility: 3000,
        maintenance: 500,
      },
      medical: {
        basic: 500,
        regular: 1000,
        private: 3000,
        premium: 5000,
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
      cuisine: {
        chinese: 300,
        japanese: 400,
        western: 500,
        international: 600,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 400,
        taxi: 500,
      },
      housing: {
        rent: 1500,
        mortgage: 1800,
        utility: 300,
        maintenance: 100,
      },
      medical: {
        basic: 100,
        regular: 300,
        private: 800,
        premium: 1500,
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
    tax: 48,
    source: 'Numbeo 2024',
    expenses: {
      food: {
        home: 300,
        delivery: 400,
        dining: 500,
        fine: 800,
      },
      cuisine: {
        chinese: 500,
        japanese: 700,
        western: 600,
        international: 800,
      },
      transport: {
        public: 50,
        walk: 10,
        car: 600,
        taxi: 800,
      },
      housing: {
        rent: 900,
        mortgage: 1000,
        utility: 150,
        maintenance: 50,
      },
      medical: {
        basic: 40,
        regular: 80,
        private: 200,
        premium: 400,
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
      cuisine: {
        chinese: 300,
        japanese: 450,
        western: 500,
        international: 600,
      },
      transport: {
        public: 40,
        walk: 10,
        car: 300,
        taxi: 400,
      },
      housing: {
        rent: 800,
        mortgage: 900,
        utility: 80,
        maintenance: 50,
      },
      medical: {
        basic: 50,
        regular: 100,
        private: 300,
        premium: 600,
      },
    },
  },
];

export const getCityById = (id: string): City | undefined => {
  return cities.find((city) => city.id === id);
};

export const currentCities = cities.slice(0, 6);
export const retireCities = cities.slice(0, 6);

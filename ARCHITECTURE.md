# 🏗️ 退休規劃應用 - 系統架構

## 應用結構 (React + TypeScript)

```
retirement-planner/
├── src/
│   ├── components/          # UI 元件
│   │   ├── ProgressBar/    # 進度條
│   │   ├── CitySelector/   # 城市選擇
│   │   ├── AgeSlider/     # 年齡滑桿
│   │   ├── OptionGrid/    # 選項網格
│   │   ├── ResultCard/   # 結果顯示
│   │   └── StatsGrid/    # 統計數據
│   │
│   ├── hooks/              # 自定義 Hooks
│   │   ├── useCalculator.ts    # 計算邏輯
│   │   ├── useCityData.ts     # 城市數據
│   │   └── useCalculator.ts   # 計算
│   │
│   ├── data/                  # 靜態數據
│   │   └── cities.ts          # 城市數據庫
│   │
│   ├── types/                 # TypeScript 類型
│   │   └── index.ts
│   │
│   ├── utils/                # 工具函數
│   │   └── calculations.ts   # 計算公式
│   │
│   ├── App.tsx              # 主應用
│   ├── App.css             # 全域樣式
│   └── main.tsx            # 入口
│
├── public/                   # 靜態資源
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 組件說明

### 1. CitySelector
- 顯示目前城市選項
- 顯示退休城市選項
- 支援單選

### 2. AgeSlider  
- 20-60 歲範圍
- 即時顯示年齡

### 3. OptionGrid
- 生活方式問題選項
- 飲食/旅行/交通/興趣

### 4. ResultCard
- 顯示總金額
- 顯示本地貨幣
- 顯示建議

### 5. StatsGrid
- 每月使費
- 通脹率
- 每月要儲
- 距離退休年數

---

## 數據流

```
用戶輸入 → State管理 → 計算模組 → 結果顯示
     ↓
  城市數據 + 生活系數 → 計算公式 → 最終金額
```

---

## 計算模組

```typescript
interface CityData {
  id: string;
  name: string;
  monthlyUSD: number;
  inflation: number;
  currency: string;
  rate: number;
}

interface UserState {
  currentCity: string;
  retireCity: string;
  age: number;
  food: number;
  travel: number;
  transport: number;
  hobbies: number;
}

// 計算公式
calculate(state: UserState): Result
```

---

## 設計原則

1. **組件化**: 每個 UI 部分獨立成組件
2. **數據驅動**: 城市數據由 data/cities.ts 提供
3. **計算分離**: 計算邏輯在 utils/calculations.ts
4. **Type Safety**: 全程式別檢查
5. **響應式**: Mobile-first 設計

---

*架構日期: 2026-02-20*

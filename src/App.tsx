import { useState } from 'react';
import './App.css';
import { cities, currentCities, retireCities, getCityById } from './data/cities';
import type { UserState, CalculationResult, DetailedResult } from './types';
import { lifestyleOptions } from './types';
import { calculateRetirement, calculateDetailed, getSuggestion, formatUSD, formatCurrency } from './utils/calculations';

// Progress Bar Component
function ProgressBar({ step }: { step: number }) {
  return (
    <div className="progress">
      <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
      <div className={`progress-step ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`progress-step ${step >= 3 ? 'active' : ''}`}></div>
    </div>
  );
}

// City Detail Component - Show expense breakdown
function CityDetail({ cityId }: { cityId: string }) {
  const city = getCityById(cityId);
  if (!city) return null;
  
  return (
    <div className="city-detail">
      <div className="detail-header">
        <span className="detail-flag">{city.flag}</span>
        <span className="detail-title">{city.name} 每月開支</span>
      </div>
      <div className="detail-grid">
        <div className="detail-item">
          <span className="detail-icon">🏪</span>
          <span className="detail-label">超市買餸</span>
          <span className="detail-value">${city.expenses.food.home}</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🍜</span>
          <span className="detail-label">出街食飯</span>
          <span className="detail-value">${city.expenses.food.dining}</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🚇</span>
          <span className="detail-label">交通費</span>
          <span className="detail-value">${city.expenses.transport.public}</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🏠</span>
          <span className="detail-label">租金參考</span>
          <span className="detail-value">${city.expenses.housing.rent}</span>
        </div>
      </div>
      <div className="detail-source">
        數據來源: {city.source} | 稅率: {city.tax}%
      </div>
    </div>
  );
}

// City Option Component
function CityOption({ 
  city, 
  selected, 
  onClick,
  showCost = false 
}: { 
  city: typeof cities[0]; 
  selected: boolean; 
  onClick: () => void;
  showCost?: boolean;
}) {
  return (
    <div 
      className={`option ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="option-flag">{city.flag}</span>
      <div className="option-name">{city.name}</div>
      {showCost && (
        <div className="option-cost">${city.monthlyUSD}/月</div>
      )}
    </div>
  );
}

// Lifestyle Option Component
function LifestyleOption({ 
  option, 
  selected, 
  onClick 
}: { 
  option: typeof lifestyleOptions.food[0]; 
  selected: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      className={`option ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="option-flag">{option.icon}</span>
      <div className="option-name">{option.label}</div>
    </div>
  );
}

// Age Slider Component
function AgeSlider({ 
  value, 
  onChange 
}: { 
  value: number; 
  onChange: (value: number) => void;
}) {
  return (
    <div className="slider-wrap">
      <div className="slider-value">{value}</div>
      <input 
        type="range" 
        className="slider"
        min="20" 
        max="60" 
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="slider-labels">
        <span>20</span>
        <span>60</span>
      </div>
    </div>
  );
}

// Result Component - Detailed Excel-like breakdown
function Result({ result, detailed }: { result: CalculationResult; detailed: DetailedResult }) {
  const suggestion = getSuggestion(result.savingsNeed);
  
  return (
    <div className="result-section">
      {/* Main Result */}
      <div className="result-box">
        <div className="result-amount">{formatUSD(result.totalNeeded)}</div>
        <div className="result-sub">退休需要 (USD)</div>
        <div className="result-local">
          約 {formatCurrency(result.localAmount, result.currency)}
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="stats">
        <div className="stat">
          <div className="stat-val">{formatUSD(result.monthlyNeed)}</div>
          <div className="stat-label">每月使費</div>
        </div>
        <div className="stat">
          <div className="stat-val">{result.inflationRate}%</div>
          <div className="stat-label">通脹率</div>
        </div>
        <div className="stat">
          <div className="stat-val">{formatUSD(result.savingsNeed)}</div>
          <div className="stat-label">每月要儲</div>
        </div>
        <div className="stat">
          <div className="stat-val">{result.yearsToRetire}年</div>
          <div className="stat-label">距離退休</div>
        </div>
      </div>
      
      {/* Detailed Breakdown - Excel Style */}
      <div className="detail-table">
        <div className="detail-table-header">📊 詳細支出明細 (退休時)</div>
        
        <div className="detail-table-section">
          <div className="detail-table-title">🏠 每月支出細項</div>
          <table className="excel-table">
            <thead>
              <tr>
                <th>項目</th>
                <th>現在 (每月)</th>
                <th>{result.yearsToRetire}年後 (每月)</th>
                <th>變化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🍚 飲食</td>
                <td>${Math.round(detailed.monthlyFood)}</td>
                <td>${Math.round(detailed.futureFood)}</td>
                <td className="up">↑ {Math.round((detailed.futureFood / detailed.monthlyFood - 1) * 100)}%</td>
              </tr>
              <tr>
                <td>🚇 交通費</td>
                <td>${Math.round(detailed.monthlyTransport)}</td>
                <td>${Math.round(detailed.futureTransport)}</td>
                <td className="up">↑ {Math.round((detailed.futureTransport / detailed.monthlyTransport - 1) * 100)}%</td>
              </tr>
              <tr>
                <td>🏠 租金</td>
                <td>${Math.round(detailed.monthlyHousing)}</td>
                <td>${Math.round(detailed.futureHousing)}</td>
                <td className="up">↑ {Math.round((detailed.futureHousing / detailed.monthlyHousing - 1) * 100)}%</td>
              </tr>
              <tr>
                <td>💡 水電煤</td>
                <td>${Math.round(detailed.monthlyUtility)}</td>
                <td>${Math.round(detailed.futureUtility)}</td>
                <td className="up">↑ {Math.round((detailed.futureUtility / detailed.monthlyUtility - 1) * 100)}%</td>
              </tr>
              <tr>
                <td>🎭 娛樂/興趣</td>
                <td>${Math.round(detailed.monthlyLifestyle)}</td>
                <td>${Math.round(detailed.futureLifestyle)}</td>
                <td className="up">↑ {Math.round((detailed.futureLifestyle / detailed.monthlyLifestyle - 1) * 100)}%</td>
              </tr>
              <tr className="total-row">
                <td><strong>總計</strong></td>
                <td><strong>${Math.round(detailed.currentMonthly)}</strong></td>
                <td><strong>${Math.round(detailed.futureMonthly)}</strong></td>
                <td className="up"><strong>↑ {Math.round((detailed.futureMonthly / detailed.currentMonthly - 1) * 100)}%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="detail-table-section">
          <div className="detail-table-title">💰 退休規劃</div>
          <table className="excel-table">
            <thead>
              <tr>
                <th>項目</th>
                <th>金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>退休後每年使費</td>
                <td>${Math.round(detailed.futureMonthly * 12).toLocaleString()}</td>
              </tr>
              <tr>
                <td>按4%法則計算</td>
                <td>${Math.round(detailed.totalNeeded).toLocaleString()}</td>
              </tr>
              <tr>
                <td>💵 稅項 impact ({Math.round(detailed.taxRate * 100)}%)</td>
                <td>+${Math.round(detailed.totalWithTax - detailed.totalNeeded).toLocaleString()}</td>
              </tr>
              <tr>
                <td>連稅務總額</td>
                <td>${Math.round(detailed.totalWithTax).toLocaleString()}</td>
              </tr>
              <tr>
                <td>📈 每月需要儲蓄</td>
                <td>${Math.round(detailed.monthlySavings).toLocaleString()}</td>
              </tr>
              <tr>
                <td>🏦 需要總額 (本地)</td>
                <td>{detailed.currency} ${Math.round(detailed.totalWithTax * detailed.cityRate).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="detail-table-section">
          <div className="detail-table-title">📈 通脹影響</div>
          <table className="excel-table">
            <thead>
              <tr>
                <th>項目</th>
                <th>數值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>每年通脹率</td>
                <td>{Math.round(detailed.inflationRate * 100 * 10) / 10}%</td>
              </tr>
              <tr>
                <td>{result.yearsToRetire}年累積通脹</td>
                <td>{Math.round((Math.pow(1 + detailed.inflationRate, result.yearsToRetire) - 1) * 100)}%</td>
              </tr>
              <tr>
                <td>物價變化倍數</td>
                <td>{Math.round(Math.pow(1 + detailed.inflationRate, result.yearsToRetire) * 100) / 100}x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="tip">
        <p>{suggestion}</p>
      </div>
    </div>
  );
}

// Main App
function App() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [detailed, setDetailed] = useState<DetailedResult | null>(null);
  
  const [state, setState] = useState<UserState>({
    currentCity: 'hong_kong',
    retireCity: 'hong_kong',
    age: 30,
    food: 1.0,
    cuisineType: 1.0,
    travel: 1.0,
    transport: 1.0,
    hobbies: 1.0,
    housing: 'rent',
    hasProperty: false,
    propertyValue: 0,
    medical: 1.0,
    hasChildren: false,
    childrenCount: 0,
    educationLevel: 0,
    hasInsurance: false,
    insuranceType: 0,
    insurancePremium: 0,
  });

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Calculate result
      const calcResult = calculateRetirement(state);
      const detailedResult = calculateDetailed(state);
      setResult(calcResult);
      setDetailed(detailedResult);
      setStep(3);
    }
  };

  const handleRestart = () => {
    setStep(1);
    setResult(null);
    setDetailed(null);
    setState({
      currentCity: 'hong_kong',
      retireCity: 'hong_kong',
      age: 30,
      food: 1.0,
      cuisineType: 1.0,
      travel: 1.0,
      transport: 1.0,
      hobbies: 1.0,
      housing: 'rent',
      hasProperty: false,
      propertyValue: 0,
      medical: 1.0,
      hasChildren: false,
      childrenCount: 0,
      educationLevel: 0,
      hasInsurance: false,
      insuranceType: 0,
      insurancePremium: 0,
    });
  };

  return (
    <div className="container">
      <h1>退休規劃</h1>
      <p className="subtitle">答啲問題，幫你計數 🧮</p>
      
      <ProgressBar step={step > 3 ? 3 : step} />
      
      {/* Step 1: Cities & Age */}
      {step === 1 && (
        <div className="step-content">
          <div className="card">
            <div className="card-label">🏠 你而家係邊？</div>
            <div className="grid-3">
              {currentCities.map((city) => (
                <CityOption
                  key={city.id}
                  city={city}
                  selected={state.currentCity === city.id}
                  showCost
                  onClick={() => setState({ ...state, currentCity: city.id })}
                />
              ))}
            </div>
          </div>
          
          <div className="card">
            <div className="card-label">🌴 想去邊退休？</div>
            <div className="grid-3">
              {retireCities.map((city) => (
                <CityOption
                  key={city.id}
                  city={city}
                  selected={state.retireCity === city.id}
                  onClick={() => setState({ ...state, retireCity: city.id })}
                />
              ))}
            </div>
          </div>
          
          <CityDetail cityId={state.retireCity} />
          
          <div className="card">
            <div className="card-label">🎂 你幾多歲？</div>
            <AgeSlider
              value={state.age}
              onChange={(age) => setState({ ...state, age })}
            />
          </div>
          
          <button className="btn" onClick={handleNext}>
            下一步
          </button>
        </div>
      )}
      
      {/* Step 2: Lifestyle */}
      {step === 2 && (
        <div className="step-content">
          <div className="card">
            <div className="card-label">🍽️ 通常點食？</div>
            <div className="grid-4">
              {lifestyleOptions.food.map((option, i) => (
                <LifestyleOption
                  key={i}
                  option={option}
                  selected={state.food === option.value}
                  onClick={() => setState({ ...state, food: option.value })}
                />
              ))}
            </div>
          </div>
          
          <div className="card">
            <div className="card-label">✈️ 幾耐旅行？</div>
            <div className="grid-4">
              {lifestyleOptions.travel.map((option, i) => (
                <LifestyleOption
                  key={i}
                  option={option}
                  selected={state.travel === option.value}
                  onClick={() => setState({ ...state, travel: option.value })}
                />
              ))}
            </div>
          </div>
          
          <div className="card">
            <div className="card-label">🚗 點返工？</div>
            <div className="grid-4">
              {lifestyleOptions.transport.map((option, i) => (
                <LifestyleOption
                  key={i}
                  option={option}
                  selected={state.transport === option.value}
                  onClick={() => setState({ ...state, transport: option.value })}
                />
              ))}
            </div>
          </div>
          
          <div className="card">
            <div className="card-label">🎭 退休想做乜？</div>
            <div className="grid-4">
              {lifestyleOptions.hobbies.map((option, i) => (
                <LifestyleOption
                  key={i}
                  option={option}
                  selected={state.hobbies === option.value}
                  onClick={() => setState({ ...state, hobbies: option.value })}
                />
              ))}
            </div>
          </div>
          
          <div className="card">
            <div className="card-label">👶 有小朋友？(教育支出)</div>
            <div className="grid-4">
              {[
                { value: false, label: '無', icon: '❌' },
                { value: true, label: '有', icon: '👶' },
              ].map((option, i) => (
                <button
                  key={i}
                  className={`option ${state.hasChildren === option.value ? 'selected' : ''}`}
                  onClick={() => setState({ ...state, hasChildren: option.value })}
                >
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-label">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {state.hasChildren && (
            <div className="card">
              <div className="card-label">🎓 子女教育程度</div>
              <div className="grid-4">
                {lifestyleOptions.education.map((option, i) => (
                  <LifestyleOption
                    key={i}
                    option={option}
                    selected={state.educationLevel === option.value}
                    onClick={() => setState({ ...state, educationLevel: option.value })}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="card">
            <div className="card-label">🛡️ 有醫療保險？</div>
            <div className="grid-4">
              {[
                { value: false, label: '無', icon: '❌' },
                { value: true, label: '有', icon: '🛡️' },
              ].map((option, i) => (
                <button
                  key={i}
                  className={`option ${state.hasInsurance === option.value ? 'selected' : ''}`}
                  onClick={() => setState({ ...state, hasInsurance: option.value })}
                >
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-label">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {state.hasInsurance && (
            <div className="card">
              <div className="card-label">🏥 保險保障程度</div>
              <div className="grid-4">
                {lifestyleOptions.insurance.map((option, i) => (
                  <LifestyleOption
                    key={i}
                    option={option}
                    selected={state.insuranceType === option.value}
                    onClick={() => setState({ ...state, insuranceType: option.value })}
                  />
                ))}
              </div>
            </div>
          )}
          
          <button className="btn" onClick={handleNext}>
            計數
          </button>
        </div>
      )}
      
      {/* Step 3: Results */}
      {(step === 3 || step === 4) && result && (
        <div className="step-content">
          {result && detailed && <Result result={result} detailed={detailed} />}
          <button className="btn" onClick={handleRestart}>
            再整過
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

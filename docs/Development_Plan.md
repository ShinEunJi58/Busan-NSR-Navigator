# 개발 작업 상세 계획서
# KOTRA 북극항로 스마트 네비게이터

**작성일:** 2025-12-24  
**총 예상 시간:** 12시간 (2일)  
**현재 상태:** 문서화 완료, 코드 구현 시작 전

---

## 📊 전체 진행 상황

```
✅ 완료: 문서화 (PRD, Tech Stack, Tech Spec, Task, TDD/SOLID 규칙)
⏳ 진행 중: 없음
☐ 대기: 코드 구현

전체 진행률: 10% (문서화만 완료)
```

---

## 🎯 작업 단계 개요

### Phase 1: HTML/CSS 개발 (4시간)
- 5개 HTML 페이지 작성
- CSS 스타일링 (Stitch 디자인 기반)
- 반응형 디자인 구현

### Phase 2: JavaScript 개발 (5시간)
- 코어 로직 구현 (TDD 방식)
- AI 에이전트 연동
- 차트 시각화
- **중요: 코어 로직만 TDD, UI는 브라우저에서 수동 테스트**

### Phase 3: 테스트 (1시간)
- 단위 테스트 작성
- 통합 테스트
- 커버리지 확인

### Phase 4: 배포 (1시간)
- GitHub Actions 설정
- GitHub Pages 배포
- 최종 확인

### Phase 5: 문서화 마무리 (1시간)
- Walkthrough 작성
- 스크린샷 추가
- README 업데이트

---

## 📋 Phase 1: HTML/CSS 개발 (4시간)

### Step 1.1: 프로젝트 초기 설정 (30분)

#### 작업 내용
1. **폴더 구조 생성**
   ```bash
   mkdir css js data assets/images tests
   ```

2. **package.json 생성**
   ```bash
   npm init -y
   ```

3. **Jest 설치**
   ```bash
   npm install --save-dev jest @types/jest
   ```

4. **package.json 스크립트 추가**
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch",
       "test:coverage": "jest --coverage"
     }
   }
   ```

#### 체크리스트
- [ ] 폴더 구조 생성 완료
- [ ] package.json 생성 완료
- [ ] Jest 설치 완료
- [ ] 테스트 스크립트 설정 완료

---

### Step 1.2: index.html (랜딩 페이지) 작성 (30분)

#### 작업 내용
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KOTRA 북극항로 스마트 네비게이터</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- 헤더 -->
  <header>
    <div class="logo">KOTRA 폴라리스-부산</div>
    <nav>
      <a href="dashboard.html">대시보드</a>
      <a href="input.html">데이터 입력</a>
      <a href="report.html">분석 보고서</a>
      <a href="mypage.html">마이페이지</a>
    </nav>
  </header>

  <!-- 히어로 섹션 -->
  <section class="hero">
    <h1>🚢 북극항로 스마트 네비게이터</h1>
    <p>AI 기반 물류 검증 및 최적화 의사결정 지원 플랫폼</p>
  </section>

  <!-- 주요 기능 카드 -->
  <section class="features">
    <div class="card">
      <h3>🤖 AI 상담</h3>
      <p>실시간 질의응답</p>
    </div>
    <div class="card">
      <h3>📊 데이터 분석</h3>
      <p>경제성 진단</p>
    </div>
    <div class="card">
      <h3>⚡ 실시간 모니터링</h3>
      <p>리스크 분석</p>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta">
    <a href="dashboard.html" class="btn-primary">시작하기</a>
  </section>

  <!-- 푸터 -->
  <footer>
    <p>&copy; 2025 KOTRA. All rights reserved.</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

#### 체크리스트
- [ ] HTML 구조 작성
- [ ] 헤더/네비게이션 추가
- [ ] 히어로 섹션 추가
- [ ] 기능 카드 3개 추가
- [ ] CTA 버튼 추가
- [ ] 푸터 추가

---

### Step 1.3: dashboard.html (대시보드) 작성 (30분)

#### 작업 내용
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>대시보드 - NSR Navigator</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1"></script>
</head>
<body>
  <div class="container">
    <!-- 사이드바 -->
    <aside class="sidebar">
      <nav>
        <a href="dashboard.html" class="active">📊 대시보드</a>
        <a href="input.html">📝 데이터 입력</a>
        <a href="report.html">📈 분석 보고서</a>
        <a href="mypage.html">👤 마이페이지</a>
      </nav>
    </aside>

    <!-- 메인 콘텐츠 -->
    <main>
      <h1>🚢 항로 비교 분석</h1>
      
      <!-- 항로 비교 카드 -->
      <div class="route-comparison">
        <div class="route-card">
          <h3>수에즈 항로</h3>
          <p>거리: <span id="suez-distance">21,000</span> km</p>
          <p>시간: <span id="suez-days">40</span> 일</p>
          <p>비용: $<span id="suez-cost">18,000</span></p>
        </div>
        <div class="route-card">
          <h3>북극항로 (NSR)</h3>
          <p>거리: <span id="nsr-distance">12,700</span> km</p>
          <p>시간: <span id="nsr-days">25</span> 일</p>
          <p>비용: $<span id="nsr-cost">10,000</span></p>
        </div>
      </div>

      <!-- 그래프 -->
      <div class="charts">
        <canvas id="costChart"></canvas>
        <canvas id="timeChart"></canvas>
        <canvas id="co2Chart"></canvas>
      </div>

      <!-- AI 추천 -->
      <div class="ai-recommendation">
        <h3>💡 AI 추천</h3>
        <p id="ai-recommendation-text">분석 중...</p>
      </div>
    </main>
  </div>

  <script src="js/main.js"></script>
  <script src="js/calculator.js"></script>
  <script src="js/charts.js"></script>
</body>
</html>
```

#### 체크리스트
- [ ] 사이드바 네비게이션 추가
- [ ] 항로 비교 카드 2개 추가
- [ ] 차트 영역 3개 추가
- [ ] AI 추천 섹션 추가

---

### Step 1.4: input.html, report.html, mypage.html 작성 (1시간)

#### 각 페이지별 작업
- **input.html:** 입력 폼 5개 필드
- **report.html:** 분석 결과 카드 3개
- **mypage.html:** 사용자 정보 및 이력

#### 체크리스트
- [ ] input.html 완성
- [ ] report.html 완성
- [ ] mypage.html 완성

---

### Step 1.5: CSS 스타일링 (1.5시간)

#### css/style.css (메인 스타일)
```css
/* CSS 변수 */
:root {
  --primary-color: #1E88E5;
  --secondary-color: #FF9800;
  --success-color: #4CAF50;
  --warning-color: #FFC107;
  --danger-color: #F44336;
  --bg-color: #F5F7FA;
  --text-color: #263238;
  --font-main: 'Noto Sans KR', sans-serif;
}

/* 전역 스타일 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-main);
  color: var(--text-color);
  background-color: var(--bg-color);
  line-height: 1.6;
}

/* 레이아웃 */
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

/* 더 많은 스타일... */
```

#### css/components.css (컴포넌트)
```css
/* 버튼 */
.btn-primary {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.btn-primary:hover {
  background-color: #1565C0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
}

/* 카드 */
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* 더 많은 컴포넌트... */
```

#### css/responsive.css (반응형)
```css
/* 데스크톱 (1920px+) */
@media (min-width: 1920px) {
  .container {
    max-width: 1920px;
    margin: 0 auto;
  }
}

/* 태블릿 (768px - 1919px) */
@media (max-width: 1919px) {
  .container {
    grid-template-columns: 200px 1fr;
  }
}

/* 모바일 (767px 이하) */
@media (max-width: 767px) {
  .container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
  }
}
```

#### 체크리스트
- [ ] style.css 완성 (CSS 변수, 전역 스타일, 레이아웃)
- [ ] components.css 완성 (버튼, 카드, 입력 필드)
- [ ] responsive.css 완성 (데스크톱/태블릿/모바일)
- [ ] 브라우저에서 확인

---

## 📋 Phase 2: JavaScript 개발 (5시간)

### Step 2.1: utils.js (유틸리티) - TDD 방식 (30분)

#### 1. 테스트 먼저 작성 (tests/utils.test.js)
```javascript
// tests/utils.test.js
const { formatNumber, formatDate, validateInput } = require('../js/utils');

describe('formatNumber', () => {
  test('천 단위 콤마 추가', () => {
    expect(formatNumber(1000)).toBe('1,000');
    expect(formatNumber(1000000)).toBe('1,000,000');
  });
  
  test('소수점 처리', () => {
    expect(formatNumber(1234.56)).toBe('1,234.56');
  });
});

describe('formatDate', () => {
  test('날짜 포맷팅', () => {
    const date = new Date('2025-12-24');
    expect(formatDate(date)).toBe('2025-12-24');
  });
});

describe('validateInput', () => {
  test('빈 값 검증', () => {
    expect(validateInput('')).toBe(false);
    expect(validateInput('value')).toBe(true);
  });
  
  test('숫자 검증', () => {
    expect(validateInput('123', 'number')).toBe(true);
    expect(validateInput('abc', 'number')).toBe(false);
  });
});
```

#### 2. 테스트 실행 (실패 확인)
```bash
npm test
# FAIL: formatNumber is not defined
```

#### 3. 코드 작성 (js/utils.js)
```javascript
// js/utils.js
function formatNumber(num) {
  return num.toLocaleString('ko-KR');
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function validateInput(value, type = 'string') {
  if (!value || value.trim() === '') return false;
  
  if (type === 'number') {
    return !isNaN(value);
  }
  
  return true;
}

module.exports = { formatNumber, formatDate, validateInput };
```

#### 4. 테스트 재실행 (통과 확인)
```bash
npm test
# PASS: All tests passed
```

#### 체크리스트
- [ ] 테스트 작성
- [ ] 테스트 실행 (실패 확인)
- [ ] 코드 작성
- [ ] 테스트 재실행 (통과 확인)
- [ ] 커버리지 100% 확인

---

### Step 2.2: calculator.js (경제성 계산) - TDD 방식 (1.5시간)

#### 1. 테스트 작성 (tests/calculator.test.js)
```javascript
const Calculator = require('../js/calculator');

describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  });
  
  describe('calculate', () => {
    test('수에즈 항로 비용 계산', () => {
      const result = calculator.calculate('suez', 10, 'all');
      expect(result.cost).toBe(13000);
      expect(result.distance).toBe(21000);
      expect(result.days).toBe(40);
    });
    
    test('NSR 여름 비용 계산', () => {
      const result = calculator.calculate('nsr', 10, 'summer');
      expect(result.cost).toBe(13000);
      expect(result.distance).toBe(12700);
      expect(result.days).toBe(25);
    });
    
    test('NSR 겨울 비용 계산 (20% 할증)', () => {
      const result = calculator.calculate('nsr', 10, 'winter');
      expect(result.cost).toBe(15000);
    });
  });
  
  describe('compare', () => {
    test('수에즈 vs NSR 비교', () => {
      const result = calculator.compare(10, 'summer');
      expect(result.savings.cost).toBeGreaterThan(0);
      expect(result.savings.days).toBe(15);
    });
  });
  
  describe('calculateCO2', () => {
    test('CO₂ 계산', () => {
      const co2 = calculator.calculateCO2(21000, 10);
      expect(co2).toBe(3150);
    });
  });
});
```

#### 2. 코드 작성 (js/calculator.js)
```javascript
class Calculator {
  constructor() {
    this.routes = null;
  }
  
  async loadData() {
    const response = await fetch('data/routes.json');
    this.routes = await response.json();
  }
  
  calculate(route, teu, season) {
    const routeData = this.routes[route][season];
    const cost = routeData.base_cost_usd + (routeData.cost_per_teu * teu);
    
    return {
      distance: routeData.distance_km,
      days: routeData.lead_time_days,
      cost: cost,
      co2: this.calculateCO2(routeData.distance_km, teu)
    };
  }
  
  compare(teu, season) {
    const suez = this.calculate('suez', teu, 'all');
    const nsr = this.calculate('nsr', teu, season);
    
    return {
      suez,
      nsr,
      savings: {
        cost: suez.cost - nsr.cost,
        days: suez.days - nsr.days,
        distance: suez.distance - nsr.distance,
        co2: suez.co2 - nsr.co2
      }
    };
  }
  
  calculateCO2(distance, teu) {
    const co2PerKm = 0.015;
    return distance * co2PerKm * teu;
  }
}

module.exports = Calculator;
```

#### 체크리스트
- [ ] 테스트 작성 (10개 이상)
- [ ] Edge Case 테스트 추가
- [ ] 코드 작성
- [ ] 테스트 통과 확인
- [ ] 커버리지 90% 이상 확인

---

### Step 2.3: ai-agent.js (AI 에이전트) - TDD 방식 (2시간)

#### 1. 테스트 작성 (tests/ai-agent.test.js)
```javascript
const NSRAgent = require('../js/ai-agent');

describe('NSRAgent', () => {
  let agent;
  
  beforeEach(() => {
    agent = new NSRAgent();
  });
  
  describe('extractKeywords', () => {
    test('불용어 제거', () => {
      const keywords = agent.extractKeywords('북극항로는 빠릅니다');
      expect(keywords).toContain('북극항로');
      expect(keywords).toContain('빠릅니다');
      expect(keywords).not.toContain('는');
    });
    
    test('소문자 변환', () => {
      const keywords = agent.extractKeywords('NSR');
      expect(keywords).toEqual(['nsr']);
    });
    
    test('빈 문자열 처리', () => {
      const keywords = agent.extractKeywords('');
      expect(keywords).toEqual([]);
    });
  });
  
  describe('calculateRelevance', () => {
    test('완전 일치', () => {
      const score = agent.calculateRelevance(['북극'], ['북극']);
      expect(score).toBe(1);
    });
    
    test('부분 일치', () => {
      const score = agent.calculateRelevance(['북극'], ['북극항로']);
      expect(score).toBeGreaterThan(0);
    });
    
    test('불일치', () => {
      const score = agent.calculateRelevance(['수에즈'], ['북극']);
      expect(score).toBe(0);
    });
  });
  
  describe('searchKnowledge', () => {
    test('관련 문서 검색', () => {
      const docs = agent.searchKnowledge('북극항로 비용');
      expect(docs.length).toBeGreaterThan(0);
      expect(docs[0]).toHaveProperty('title');
      expect(docs[0]).toHaveProperty('content');
    });
    
    test('상위 3개만 반환', () => {
      const docs = agent.searchKnowledge('북극항로');
      expect(docs.length).toBeLessThanOrEqual(3);
    });
  });
});
```

#### 2. 코드 작성 (js/ai-agent.js)
```javascript
class NSRAgent {
  constructor() {
    this.apiKey = null;
    this.model = 'google/flan-t5-large';
    this.apiUrl = `https://api-inference.huggingface.co/models/${this.model}`;
    this.knowledgeBase = null;
  }
  
  async init() {
    const response = await fetch('data/knowledge.json');
    this.knowledgeBase = await response.json();
  }
  
  extractKeywords(text) {
    if (!text) return [];
    
    const stopWords = ['은', '는', '이', '가', '을', '를', '에', '의'];
    return text
      .split(/\s+/)
      .filter(word => !stopWords.includes(word))
      .map(word => word.toLowerCase());
  }
  
  calculateRelevance(queryKeywords, docKeywords) {
    if (queryKeywords.length === 0) return 0;
    
    let matches = 0;
    for (const qk of queryKeywords) {
      for (const dk of docKeywords) {
        if (qk.includes(dk) || dk.includes(qk)) {
          matches++;
        }
      }
    }
    return matches / queryKeywords.length;
  }
  
  searchKnowledge(question) {
    const keywords = this.extractKeywords(question);
    const relevantDocs = [];
    
    for (const doc of this.knowledgeBase.documents) {
      const score = this.calculateRelevance(keywords, doc.keywords);
      if (score > 0.3) {
        relevantDocs.push({ ...doc, score });
      }
    }
    
    return relevantDocs
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }
  
  async ask(question) {
    try {
      const relevantDocs = this.searchKnowledge(question);
      const context = relevantDocs.map(doc => doc.content).join('\n\n');
      
      const prompt = `
당신은 KOTRA의 북극항로(NSR) 전문 상담 AI입니다.

참고 문서:
${context}

질문: ${question}

위 참고 문서를 바탕으로 정확하고 친절하게 답변해주세요.

답변:`;
      
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 200,
            temperature: 0.7
          }
        })
      });
      
      const result = await response.json();
      
      return {
        answer: result[0].generated_text,
        sources: relevantDocs.map(doc => ({
          title: doc.title,
          file: doc.id
        }))
      };
      
    } catch (error) {
      console.error('AI 에러:', error);
      return {
        answer: '죄송합니다. 일시적인 오류가 발생했습니다.',
        sources: []
      };
    }
  }
}

module.exports = NSRAgent;
```

#### 체크리스트
- [ ] 테스트 작성 (15개 이상)
- [ ] API 호출 Mock 테스트
- [ ] 코드 작성
- [ ] 테스트 통과 확인
- [ ] 커버리지 95% 이상 확인

---

### Step 2.4: charts.js, risk-monitor.js, recommender.js (1시간)

#### 각 파일별 TDD 작업
- **charts.js:** Chart.js 래퍼 (테스트 제외 - UI)
- **risk-monitor.js:** 리스크 분석 로직 (TDD)
- **recommender.js:** 품목 추천 로직 (TDD)

#### 체크리스트
- [ ] charts.js 작성
- [ ] risk-monitor.js TDD
- [ ] recommender.js TDD
- [ ] 모든 테스트 통과

---

## 📋 Phase 3: 테스트 및 통합 (1시간)

### Step 3.1: 전체 테스트 실행 및 커버리지 확인

```bash
# 모든 테스트 실행
npm test

# 커버리지 확인
npm run test:coverage
```

#### 목표 커버리지
- **utils.js:** 100%
- **calculator.js:** 95%
- **ai-agent.js:** 95%
- **risk-monitor.js:** 90%
- **recommender.js:** 90%
- **전체:** 90% 이상

#### 체크리스트
- [ ] 모든 테스트 통과
- [ ] 커버리지 목표 달성
- [ ] Edge Case 추가 테스트
- [ ] 버그 수정

---

## 📋 Phase 4: GitHub Pages 배포 (1시간)

### Step 4.1: GitHub Actions 워크플로우 작성

#### .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Inject API Key
        run: |
          echo "const CONFIG = { HUGGING_FACE_API_KEY: '${{ secrets.HUGGING_FACE_API_KEY }}' };" > js/config.js
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

#### 체크리스트
- [ ] 워크플로우 파일 작성
- [ ] GitHub Secrets 설정
- [ ] GitHub Pages 활성화
- [ ] 배포 테스트

---

## 📋 Phase 5: 문서화 마무리 (1시간)

### Step 5.1: Walkthrough 작성

#### docs/Walkthrough.md
```markdown
# 프로젝트 Walkthrough

## 완성된 기능
- ✅ AI 상담 에이전트
- ✅ 경제성 계산기
- ✅ 차트 시각화
- ✅ 반응형 디자인

## 테스트 결과
- 전체 커버리지: 92%
- 통과한 테스트: 45/45

## 스크린샷
[스크린샷 추가]

## 배포 URL
https://your-username.github.io/Busan-NSR-Navigator
```

#### 체크리스트
- [ ] Walkthrough 작성
- [ ] 스크린샷 추가
- [ ] README 업데이트
- [ ] 최종 확인

---

## ✅ 최종 체크리스트

### 개발 완료 확인
- [ ] 모든 HTML 페이지 작동
- [ ] CSS 스타일링 완료
- [ ] JavaScript 로직 작동
- [ ] AI API 연동 성공
- [ ] 차트 렌더링 성공

### 테스트 확인
- [ ] 단위 테스트 통과
- [ ] 커버리지 90% 이상
- [ ] Edge Case 테스트 완료

### 배포 확인
- [ ] GitHub Actions 성공
- [ ] GitHub Pages 배포 성공
- [ ] 실제 URL 접속 가능
- [ ] 모든 기능 작동

### 문서 확인
- [ ] README 업데이트
- [ ] Walkthrough 작성
- [ ] 스크린샷 추가

---

**작성자:** 프로젝트 팀  
**최종 수정:** 2025-12-24  
**다음 단계:** Phase 1 시작 (HTML/CSS 개발)

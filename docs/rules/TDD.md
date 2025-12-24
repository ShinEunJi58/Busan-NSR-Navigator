# TDD (Test-Driven Development) 규칙
# KOTRA 북극항로 스마트 네비게이터

**적용 범위:** UI를 제외한 모든 코어 로직  
**작성일:** 2025-12-24

---

## 🎯 TDD 원칙

### Red-Green-Refactor 사이클

```
1. 🔴 Red: 실패하는 테스트 작성
   ↓
2. 🟢 Green: 테스트를 통과하는 최소한의 코드 작성
   ↓
3. 🔵 Refactor: 코드 개선 (테스트는 계속 통과)
   ↓
   반복
```

---

## 📋 TDD 적용 대상

### ✅ 테스트 필수 (코어 로직만)

**중요: UI 관련 코드는 테스트 자동화하지 않습니다!**

1. **AI 에이전트** (`js/ai-agent.js`)
   - extractKeywords()
   - calculateRelevance()
   - searchKnowledge()
   - ask() - API 호출 부분은 Mock

2. **경제성 계산기** (`js/calculator.js`)
   - calculate()
   - compare()
   - calculateCO2()

3. **리스크 모니터** (`js/risk-monitor.js`)
   - analyzeRisk()
   - getRiskLevel()

4. **품목 추천** (`js/recommender.js`)
   - recommend()
   - calculateScore()

5. **유틸리티** (`js/utils.js`)
   - formatNumber()
   - formatDate()
   - validateInput()

### ❌ 테스트 제외 (UI 및 DOM 조작)

**이유: UI 테스트는 시간이 오래 걸리고 복잡함. 수동 테스트로 충분!**

- **HTML 파일** - 브라우저에서 수동 확인
- **CSS 파일** - 브라우저에서 수동 확인
- **DOM 조작 코드** - 브라우저에서 수동 확인
  - `document.getElementById()`
  - `element.addEventListener()`
  - `element.innerHTML = ...`
- **Chart.js 렌더링** - 브라우저에서 수동 확인
- **이벤트 리스너** - 브라우저에서 수동 확인
- **main.js** (UI 로직) - 브라우저에서 수동 확인

### 🔍 수동 테스트 방법

```bash
# 로컬 서버 실행
python -m http.server 8000

# 브라우저에서 확인
http://localhost:8000

# 체크리스트
- [ ] 모든 페이지 로딩 확인
- [ ] 버튼 클릭 동작 확인
- [ ] 입력 폼 동작 확인
- [ ] 차트 렌더링 확인
- [ ] 반응형 디자인 확인 (모바일/태블릿)
```

---

## 🔧 테스트 프레임워크: Jest

**설치:**
```bash
npm install --save-dev jest
```

**테스트 실행:**
```bash
npm test
```

---

## 📝 TDD 작성 규칙

### 1. 테스트 먼저 작성

```javascript
// 1. 테스트 작성 (실패)
test('수에즈 항로 비용 계산', () => {
  const result = calculate('suez', 10);
  expect(result.cost).toBe(13000);
});

// 2. 코드 작성 (통과)
function calculate(route, teu) {
  // 구현
}
```

### 2. AAA 패턴

```javascript
test('항로 비교', () => {
  // Arrange (준비)
  const calculator = new Calculator();
  
  // Act (실행)
  const result = calculator.compare(10);
  
  // Assert (검증)
  expect(result.savings.cost).toBe(3000);
});
```

### 3. 명확한 테스트 이름

```javascript
// ✅ 좋은 예
test('겨울철 NSR 비용은 여름 대비 20% 증가', () => {});

// ❌ 나쁜 예
test('테스트1', () => {});
```

---

## 📊 테스트 커버리지 목표

- **코어 로직:** 90% 이상
- **유틸리티:** 100%
- **전체:** 80% 이상

---

**관련 규칙:** [SOLID.md](./SOLID.md)

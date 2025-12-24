# SOLID 원칙
# KOTRA 북극항로 스마트 네비게이터

**적용 범위:** 모든 JavaScript 코드  
**작성일:** 2025-12-24

---

## 🎯 SOLID 원칙 개요

```
S - Single Responsibility (단일 책임)
O - Open/Closed (개방/폐쇄)
L - Liskov Substitution (리스코프 치환)
I - Interface Segregation (인터페이스 분리)
D - Dependency Inversion (의존성 역전)
```

---

## 1️⃣ Single Responsibility Principle (단일 책임 원칙)

**원칙:** 하나의 클래스는 하나의 책임만 가져야 한다.

### ✅ 좋은 예

```javascript
// 각 클래스가 하나의 책임만 가짐
class Calculator {
  calculate(route, teu) {
    // 계산만 담당
  }
}

class DataLoader {
  loadRoutes() {
    // 데이터 로딩만 담당
  }
}

class ChartRenderer {
  render(data) {
    // 차트 렌더링만 담당
  }
}
```

### ❌ 나쁜 예

```javascript
// 하나의 클래스가 여러 책임을 가짐
class Calculator {
  calculate(route, teu) {
    // 계산
  }
  
  loadData() {
    // 데이터 로딩
  }
  
  renderChart() {
    // 차트 렌더링
  }
}
```

---

## 2️⃣ Open/Closed Principle (개방/폐쇄 원칙)

**원칙:** 확장에는 열려있고, 수정에는 닫혀있어야 한다.

### ✅ 좋은 예

```javascript
// 기본 클래스
class RouteCalculator {
  calculate(route, teu) {
    const data = this.getRouteData(route);
    return this.computeCost(data, teu);
  }
  
  getRouteData(route) {
    // 기본 구현
  }
  
  computeCost(data, teu) {
    // 기본 구현
  }
}

// 확장 (기존 코드 수정 없이)
class SeasonalRouteCalculator extends RouteCalculator {
  computeCost(data, teu) {
    const baseCost = super.computeCost(data, teu);
    return this.applySeasonalSurcharge(baseCost);
  }
  
  applySeasonalSurcharge(cost) {
    // 계절 할증 로직
  }
}
```

---

## 3️⃣ Liskov Substitution Principle (리스코프 치환 원칙)

**원칙:** 자식 클래스는 부모 클래스를 대체할 수 있어야 한다.

### ✅ 좋은 예

```javascript
class RouteCalculator {
  calculate(route, teu) {
    return { cost: 0, days: 0 };
  }
}

class NSRCalculator extends RouteCalculator {
  calculate(route, teu) {
    // 부모와 같은 형식 반환
    return { cost: 10000, days: 25 };
  }
}

// 어디서든 교체 가능
function processRoute(calculator) {
  const result = calculator.calculate('nsr', 10);
  console.log(result.cost); // 항상 작동
}
```

---

## 4️⃣ Interface Segregation Principle (인터페이스 분리 원칙)

**원칙:** 클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 한다.

### ✅ 좋은 예

```javascript
// 작은 인터페이스로 분리
class CostCalculator {
  calculateCost(route, teu) {}
}

class TimeCalculator {
  calculateTime(route) {}
}

class CO2Calculator {
  calculateCO2(route, teu) {}
}

// 필요한 것만 사용
class QuickEstimator {
  constructor(costCalc) {
    this.costCalc = costCalc;
  }
  
  estimate(route, teu) {
    return this.costCalc.calculateCost(route, teu);
  }
}
```

### ❌ 나쁜 예

```javascript
// 거대한 인터페이스
class MegaCalculator {
  calculateCost() {}
  calculateTime() {}
  calculateCO2() {}
  calculateRisk() {}
  recommendItems() {}
  // ... 너무 많은 메서드
}

// 일부만 사용하지만 전체에 의존
class QuickEstimator {
  constructor(megaCalc) {
    this.megaCalc = megaCalc; // 불필요한 의존성
  }
}
```

---

## 5️⃣ Dependency Inversion Principle (의존성 역전 원칙)

**원칙:** 구체적인 것이 아닌 추상적인 것에 의존해야 한다.

### ✅ 좋은 예

```javascript
// 추상화 (인터페이스)
class DataSource {
  load() {
    throw new Error('구현 필요');
  }
}

// 구체적인 구현
class JSONDataSource extends DataSource {
  load() {
    return fetch('data.json').then(r => r.json());
  }
}

class APIDataSource extends DataSource {
  load() {
    return fetch('api/data').then(r => r.json());
  }
}

// 추상화에 의존
class Calculator {
  constructor(dataSource) {
    this.dataSource = dataSource; // DataSource 인터페이스에 의존
  }
  
  async calculate() {
    const data = await this.dataSource.load();
    // 계산...
  }
}

// 사용
const calc1 = new Calculator(new JSONDataSource());
const calc2 = new Calculator(new APIDataSource());
```

---

## ✅ 체크리스트

### 코드 작성 시
- [ ] 각 클래스가 하나의 책임만 가지는가? (SRP)
- [ ] 새 기능 추가 시 기존 코드 수정이 필요한가? (OCP)
- [ ] 자식 클래스가 부모를 대체할 수 있는가? (LSP)
- [ ] 사용하지 않는 메서드에 의존하는가? (ISP)
- [ ] 구체적인 구현에 의존하는가? (DIP)

### 코드 리뷰 시
- [ ] SOLID 원칙 위반 확인
- [ ] 리팩토링 필요성 검토

---

**관련 규칙:** [TDD.md](./TDD.md)

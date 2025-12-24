# KOTRA 북극항로 스마트 네비게이터
# NSR Smart Navigator

[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://your-username.github.io/Busan-NSR-Navigator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**AI 기반 북극항로(NSR) 물류 검증 및 최적화 의사결정 지원 플랫폼**

---

## 🎯 프로젝트 개요

중소기업의 북극항로 활용을 지원하는 웹 기반 플랫폼입니다.  
Hugging Face AI를 활용한 실시간 상담과 데이터 기반 경제성 분석을 제공합니다.

### 주요 기능

- 🤖 **AI 물류 상담** - Hugging Face API 기반 실시간 질의응답
- 💰 **경제성 진단** - 수에즈 vs NSR 비용/시간/CO₂ 비교
- ⚠️ **리스크 모니터링** - 해빙 농도 및 지정학적 리스크 분석
- 📦 **유망 품목 추천** - 기업 특성 기반 맞춤 품목 제안

---

## 🚀 라이브 데모

**배포 URL:** https://your-username.github.io/Busan-NSR-Navigator

---

## 💻 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - 반응형 디자인 (모바일/태블릿/데스크톱)
- **JavaScript (ES6+)** - Vanilla JS, 모듈화 구조

### AI/LLM
- **Hugging Face Inference API** - 무료 클라우드 AI
- **모델:** `google/flan-t5-large`

### Visualization
- **Chart.js** - 인터랙티브 차트

### Deployment
- **GitHub Pages** - 무료 호스팅
- **GitHub Actions** - CI/CD 자동 배포

### 개발 방법론
- **TDD** - Jest 기반 테스트 주도 개발 (커버리지 90%)
- **SOLID** - 객체지향 설계 원칙

---

## 📁 프로젝트 구조

```
Busan-NSR-Navigator/
├── index.html              # 랜딩 페이지
├── dashboard.html          # 대시보드
├── input.html              # 데이터 입력
├── report.html             # 분석 보고서
├── mypage.html             # 마이페이지
├── css/                    # 스타일시트
├── js/                     # JavaScript 로직
├── data/                   # JSON 데이터
├── design/                 # Stitch 디자인 파일
├── docs/                   # 문서
│   ├── PRD.md
│   ├── Tech_Stack.md
│   ├── Tech_Spec.md
│   ├── Task.md
│   └── rules/
│       ├── TDD.md
│       └── SOLID.md
└── .github/workflows/      # GitHub Actions
```

---

## 🛠️ 로컬 개발

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/Busan-NSR-Navigator.git
cd Busan-NSR-Navigator
```

### 2. Hugging Face API 키 설정
1. https://huggingface.co 가입 (무료)
2. Settings → Access Tokens → New token 생성
3. `js/config.js` 파일 생성:
```javascript
const CONFIG = {
  HUGGING_FACE_API_KEY: 'your_api_key_here'
};
```

### 3. 로컬 서버 실행
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000
```

### 4. 브라우저에서 확인
```
http://localhost:8000
```

---

## 🧪 테스트

### 테스트 실행
```bash
npm test
```

### 커버리지 확인
```bash
npm run test:coverage
```

**목표 커버리지:** 90% 이상

---

## 🚀 배포

### GitHub Pages 자동 배포

코드를 `main` 브랜치에 푸시하면 GitHub Actions가 자동으로 배포합니다.

```bash
git add .
git commit -m "Update feature"
git push origin main
```

배포 상태 확인: GitHub 저장소 → Actions 탭

---

## 📚 문서

- [PRD (제품 요구사항 정의서)](docs/PRD.md)
- [Tech Stack (기술 스택)](docs/Tech_Stack.md)
- [Tech Spec (기술 명세서)](docs/Tech_Spec.md)
- [Task List (작업 목록)](docs/Task.md)
- [TDD 규칙](docs/rules/TDD.md)
- [SOLID 원칙](docs/rules/SOLID.md)

---

## 💰 비용

**총 비용: ₩0 (완전 무료)**

- Hugging Face API: 무료 (1,000 요청/일)
- GitHub Pages: 무료
- GitHub Actions: 무료 (2,000분/월)
- Chart.js: 무료 (오픈소스)

---

## 📄 라이선스

MIT License

---

## 👤 작성자

**프로젝트:** KOTRA 통상직 채용 포트폴리오  
**작성일:** 2025-12-24  
**목적:** GitHub Pages 배포 가능한 AI 기반 물류 플랫폼

---

## 🙏 감사의 말

- **Hugging Face** - 무료 AI API 제공
- **GitHub** - 무료 호스팅 및 CI/CD
- **Chart.js** - 오픈소스 차트 라이브러리
- **Stitch** - UI/UX 디자인

---

**⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!**

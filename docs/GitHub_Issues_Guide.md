# GitHub Issues 생성 가이드
# KOTRA 북극항로 스마트 네비게이터

**작성일:** 2025-12-24  
**목적:** Task.md의 작업들을 GitHub Issues로 등록

---

## 📋 Issue 생성 방법

### 방법 1: GitHub CLI 사용 (추천)

```bash
# GitHub CLI 설치 확인
gh --version

# 로그인
gh auth login

# Issue 생성 (예시)
gh issue create --title "Epic 1.1: 프로젝트 구조 생성" --body "$(cat .github/issues/epic-1-1.md)"
```

### 방법 2: GitHub 웹사이트에서 수동 생성

1. GitHub 저장소 → Issues 탭
2. New issue 클릭
3. 아래 템플릿 복사/붙여넣기

---

## 📝 Issue 템플릿

아래는 각 Epic별 Issue 템플릿입니다.

---

## Phase 1: 준비 단계

### Issue #1: Epic 1.1 - 프로젝트 구조 생성

**Labels:** `phase-1`, `setup`, `priority-high`

**Title:** Epic 1.1: 프로젝트 구조 생성

**Body:**
```markdown
## 📌 작업 배경

GitHub Pages 배포를 위한 정적 웹사이트 프로젝트의 기본 구조를 생성합니다.
HTML/CSS/JavaScript 기반 프로젝트이므로 적절한 폴더 구조가 필요합니다.

## 📋 작업 내용

### 1. GitHub 저장소 설정
- [ ] 저장소 이름: `Busan-NSR-Navigator`
- [ ] Public으로 설정
- [ ] README.md 초기화

### 2. 로컬에 클론
- [ ] `git clone` 실행
- [ ] 폴더 이동

### 3. 폴더 구조 생성
```bash
mkdir css js data assets/images tests
mkdir .github/workflows
```

생성할 폴더:
- `css/` - 스타일시트
- `js/` - JavaScript 파일
- `data/` - JSON 데이터
- `assets/images/` - 이미지 파일
- `tests/` - Jest 테스트 파일
- `.github/workflows/` - GitHub Actions

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] GitHub 저장소가 생성되어 있음
- [ ] 로컬에 저장소가 클론되어 있음
- [ ] 모든 폴더가 생성되어 있음
- [ ] `git status`로 폴더 구조 확인 가능

## 📊 예상 시간

30분

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 1.1
- [Development_Plan.md](../docs/Development_Plan.md) - Step 1.1
```

---

### Issue #2: Epic 1.2 - Hugging Face API 설정

**Labels:** `phase-1`, `setup`, `api`, `priority-high`

**Title:** Epic 1.2: Hugging Face API 설정

**Body:**
```markdown
## 📌 작업 배경

AI 상담 기능을 위해 Hugging Face Inference API를 사용합니다.
무료 API 키를 발급받고 GitHub Secrets에 안전하게 저장해야 합니다.

## 📋 작업 내용

### 1. Hugging Face 계정 생성
- [ ] https://huggingface.co 가입
- [ ] 이메일 인증 완료

### 2. API 키 생성
- [ ] Settings → Access Tokens 이동
- [ ] New token 생성
- [ ] 키 복사 및 안전한 곳에 저장

### 3. GitHub Secrets 설정
- [ ] GitHub 저장소 → Settings → Secrets and variables → Actions
- [ ] New repository secret 클릭
- [ ] Name: `HUGGING_FACE_API_KEY`
- [ ] Value: (API 키 붙여넣기)
- [ ] Add secret 클릭

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] Hugging Face 계정이 생성되어 있음
- [ ] API 키가 발급되어 있음
- [ ] GitHub Secrets에 `HUGGING_FACE_API_KEY`가 저장되어 있음
- [ ] Secrets 페이지에서 키 이름 확인 가능

## ⚠️ 주의사항

- API 키를 코드에 직접 하드코딩하지 말 것
- API 키를 Git에 커밋하지 말 것
- `.gitignore`에 `config.js` 추가

## 📊 예상 시간

30분

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 1.2
- [TDD.md](../docs/rules/TDD.md) - API 키 보안
```

---

### Issue #3: Epic 1.3 - 데이터 파일 작성

**Labels:** `phase-1`, `data`, `priority-high`

**Title:** Epic 1.3: 데이터 파일 작성 (JSON)

**Body:**
```markdown
## 📌 작업 배경

정적 웹사이트이므로 모든 데이터를 JSON 파일로 저장합니다.
항로 데이터, 항구 정보, AI 지식 베이스 등을 JSON 형식으로 작성해야 합니다.

## 📋 작업 내용

### 1. routes.json 작성
- [ ] 수에즈 항로 데이터 (거리, 시간, 비용)
- [ ] NSR 여름 데이터
- [ ] NSR 겨울 데이터 (20% 할증)

### 2. ports.json 작성
- [ ] 부산항 정보
- [ ] 로테르담항 정보

### 3. seasonal_costs.json 작성
- [ ] 계절별 비용 데이터

### 4. risk_indicators.json 작성
- [ ] 해빙 농도 데이터
- [ ] 지정학적 리스크 지표

### 5. knowledge.json 작성
- [ ] 8개 문서 내용 작성
  - 북극항로 기본 가이드
  - 계절별 운항 정보
  - 비용 구조
  - 리스크 요인
  - 성공 사례
  - FAQ
  - 품목 추천
  - 보험 정보
- [ ] 각 문서에 키워드 설정

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] 모든 JSON 파일이 `data/` 폴더에 생성되어 있음
- [ ] JSON 형식이 유효함 (JSON validator 통과)
- [ ] 각 파일에 필요한 데이터가 모두 포함되어 있음
- [ ] knowledge.json에 8개 문서가 포함되어 있음
- [ ] 각 문서에 키워드 배열이 있음

## 📊 예상 시간

1시간

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 1.3
- [PRD.md](../docs/PRD.md) - 데이터 구조
```

---

## Phase 2: HTML/CSS 개발

### Issue #4: Epic 2.1 - HTML 페이지 작성

**Labels:** `phase-2`, `html`, `ui`, `priority-high`

**Title:** Epic 2.1: HTML 페이지 작성 (5개)

**Body:**
```markdown
## 📌 작업 배경

Stitch 디자인을 기반으로 5개의 HTML 페이지를 작성합니다.
시맨틱 HTML을 사용하여 SEO와 접근성을 고려합니다.

## 📋 작업 내용

### 1. index.html (랜딩 페이지)
- [ ] 헤더 (로고, 네비게이션)
- [ ] 히어로 섹션 (타이틀, 서브타이틀)
- [ ] 주요 기능 카드 3개 (AI 상담, 데이터 분석, 모니터링)
- [ ] CTA 버튼 ("시작하기")
- [ ] 푸터 (저작권, 연락처)

### 2. dashboard.html (대시보드)
- [ ] 사이드바 네비게이션 (4개 메뉴)
- [ ] 항로 비교 카드 2개 (수에즈, NSR)
- [ ] 그래프 영역 3개 (비용, 시간, CO₂)
- [ ] AI 추천 섹션

### 3. input.html (데이터 입력)
- [ ] 입력 폼 5개 필드
  - 항로 선택 (수에즈/NSR)
  - 계절 선택 (여름/겨울)
  - TEU 입력
  - 출발지/도착지
- [ ] 계산하기 버튼
- [ ] 초기화 버튼

### 4. report.html (분석 보고서)
- [ ] 경제성 분석 카드
- [ ] 리스크 분석 카드
- [ ] AI 추천 품목 카드
- [ ] PDF 다운로드 버튼

### 5. mypage.html (마이페이지)
- [ ] 사용자 정보 카드
- [ ] 이용 통계 카드
- [ ] 분석 이력 리스트

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] 5개 HTML 파일이 모두 생성되어 있음
- [ ] 모든 페이지가 브라우저에서 로딩됨
- [ ] 시맨틱 HTML 태그 사용 (header, nav, main, section, footer)
- [ ] 모든 링크가 작동함
- [ ] HTML Validator 통과

## 📊 예상 시간

2시간

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 2.1
- [PRD.md](../docs/PRD.md) - UI/UX 설계
- Stitch 디자인 파일 (design/)
```

---

### Issue #5: Epic 2.2 - CSS 스타일링

**Labels:** `phase-2`, `css`, `ui`, `priority-high`

**Title:** Epic 2.2: CSS 스타일링 (반응형)

**Body:**
```markdown
## 📌 작업 배경

Stitch 디자인을 CSS로 구현합니다.
모바일/태블릿/데스크톱 모두 지원하는 반응형 디자인이 필요합니다.

## 📋 작업 내용

### 1. css/style.css (메인 스타일)
- [ ] CSS 변수 정의 (색상, 폰트)
- [ ] 전역 스타일 (body, h1-h6, p)
- [ ] 레이아웃 (Grid, Flexbox)
- [ ] 타이포그래피

### 2. css/components.css (컴포넌트)
- [ ] 버튼 스타일 (.btn-primary, .btn-secondary)
- [ ] 카드 스타일 (.card)
- [ ] 입력 필드 스타일 (input, select)
- [ ] 네비게이션 스타일 (.sidebar, nav)

### 3. css/responsive.css (반응형)
- [ ] 데스크톱 (1920px+)
- [ ] 태블릿 (768px-1919px)
- [ ] 모바일 (767px 이하)

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] 3개 CSS 파일이 생성되어 있음
- [ ] Stitch 디자인과 유사한 스타일
- [ ] 모든 페이지에 스타일이 적용됨
- [ ] 반응형 디자인 작동 (모바일/태블릿/데스크톱)
- [ ] CSS Validator 통과
- [ ] 브라우저 개발자 도구로 확인

## 📊 예상 시간

2시간

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 2.2
- Stitch 디자인 파일 (design/)
```

---

## Phase 3: JavaScript 개발 (TDD)

### Issue #6: Epic 3.1 - utils.js (TDD)

**Labels:** `phase-3`, `javascript`, `tdd`, `priority-high`

**Title:** Epic 3.1: utils.js 구현 (TDD)

**Body:**
```markdown
## 📌 작업 배경

유틸리티 함수들을 TDD 방식으로 구현합니다.
숫자 포맷팅, 날짜 포맷팅, 입력 검증 등 재사용 가능한 함수들입니다.

## 📋 작업 내용

### Step 1: 테스트 작성
- [ ] `tests/utils.test.js` 파일 생성
- [ ] formatNumber() 테스트 (천 단위 콤마, 소수점, 음수)
- [ ] formatDate() 테스트 (날짜 포맷팅, 잘못된 날짜)
- [ ] validateInput() 테스트 (빈 값, 숫자, 문자열)

### Step 2: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인 (함수 미정의)

### Step 3: 코드 작성
- [ ] `js/utils.js` 파일 생성
- [ ] formatNumber() 함수 구현
- [ ] formatDate() 함수 구현
- [ ] validateInput() 함수 구현

### Step 4: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

### Step 5: 리팩토링 및 검증
- [ ] 코드 리팩토링
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 100% 확인

### Step 6: main.js 작성 (UI - 테스트 제외)
- [ ] `js/main.js` 파일 생성
- [ ] 페이지 로드 이벤트
- [ ] 네비게이션 로직
- [ ] 세션 스토리지 관리

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] tests/utils.test.js 파일 존재
- [ ] 모든 테스트 통과 (Green)
- [ ] 커버리지 100%
- [ ] js/utils.js 파일 존재
- [ ] js/main.js 파일 존재
- [ ] 브라우저에서 main.js 작동 확인

## 📊 예상 시간

30분

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 3.1
- [TDD.md](../docs/rules/TDD.md) - TDD 규칙
- [Development_Plan.md](../docs/Development_Plan.md) - Step 2.1
```

---

### Issue #7: Epic 3.2 - AI 에이전트 구현 (TDD)

**Labels:** `phase-3`, `javascript`, `tdd`, `ai`, `priority-critical`

**Title:** Epic 3.2: AI 에이전트 구현 (TDD)

**Body:**
```markdown
## 📌 작업 배경

Hugging Face API를 사용한 AI 상담 기능을 TDD 방식으로 구현합니다.
RAG (Retrieval-Augmented Generation) 방식으로 지식 베이스를 검색하고 AI 답변을 생성합니다.

## 📋 작업 내용

### Step 1: 테스트 작성
- [ ] `tests/ai-agent.test.js` 파일 생성
- [ ] extractKeywords() 테스트 (불용어 제거, 소문자 변환, 빈 문자열, 특수문자)
- [ ] calculateRelevance() 테스트 (완전 일치, 부분 일치, 불일치, 빈 배열)
- [ ] searchKnowledge() 테스트 (관련 문서 검색, 상위 3개 반환, 점수 순 정렬)
- [ ] ask() 함수 Mock 테스트 (API 호출 Mock, 정상 응답, 에러 처리)

### Step 2: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인

### Step 3: 코드 작성
- [ ] `js/ai-agent.js` 파일 생성
- [ ] NSRAgent 클래스 생성
- [ ] init() 함수 구현 (지식 베이스 로딩)
- [ ] extractKeywords() 함수 구현
- [ ] calculateRelevance() 함수 구현
- [ ] searchKnowledge() 함수 구현
- [ ] ask() 함수 구현 (프롬프트 구성, Fetch API 호출, 에러 처리)

### Step 4: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

### Step 5: Edge Case 테스트 추가
- [ ] 대용량 텍스트 처리 테스트
- [ ] 특수 문자 포함 질문 테스트
- [ ] API 타임아웃 테스트

### Step 6: 리팩토링 및 검증
- [ ] 코드 리팩토링
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 95% 이상 확인

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] tests/ai-agent.test.js 파일 존재
- [ ] 15개 이상의 테스트 케이스
- [ ] 모든 테스트 통과 (Green)
- [ ] 커버리지 95% 이상
- [ ] js/ai-agent.js 파일 존재
- [ ] API Mock 테스트 통과
- [ ] 브라우저에서 AI 상담 기능 작동 확인

## 📊 예상 시간

2시간

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 3.2
- [TDD.md](../docs/rules/TDD.md) - TDD 규칙
- [PRD.md](../docs/PRD.md) - AI 에이전트 설계
```

---

### Issue #8: Epic 3.3 - Calculator 구현 (TDD)

**Labels:** `phase-3`, `javascript`, `tdd`, `priority-high`

**Title:** Epic 3.3: 경제성 계산기 구현 (TDD)

**Body:**
```markdown
## 📌 작업 배경

항로별 비용, 시간, CO₂ 배출량을 계산하는 경제성 계산기를 TDD 방식으로 구현합니다.

## 📋 작업 내용

### Step 1: 테스트 작성
- [ ] `tests/calculator.test.js` 파일 생성
- [ ] calculate() 테스트 (수에즈, NSR 여름, NSR 겨울, 잘못된 항로명, 음수 TEU)
- [ ] compare() 테스트 (수에즈 vs NSR, 절감액, 시간 절감, CO₂ 절감)
- [ ] calculateCO2() 테스트 (CO₂ 계산, 0 TEU)

### Step 2: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인

### Step 3: 코드 작성
- [ ] `js/calculator.js` 파일 생성
- [ ] Calculator 클래스 생성
- [ ] loadData() 함수 구현
- [ ] calculate() 함수 구현
- [ ] compare() 함수 구현
- [ ] calculateCO2() 함수 구현

### Step 4: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

### Step 5: 리팩토링 및 검증
- [ ] 코드 리팩토링 (SOLID 원칙 적용)
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 95% 이상 확인

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] tests/calculator.test.js 파일 존재
- [ ] 12개 이상의 테스트 케이스
- [ ] 모든 테스트 통과 (Green)
- [ ] 커버리지 95% 이상
- [ ] js/calculator.js 파일 존재
- [ ] SOLID 원칙 준수
- [ ] 브라우저에서 계산 기능 작동 확인

## 📊 예상 시간

1시간

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 3.3
- [TDD.md](../docs/rules/TDD.md) - TDD 규칙
- [SOLID.md](../docs/rules/SOLID.md) - SOLID 원칙
```

---

## Phase 4: 배포

### Issue #9: Epic 4.1 - GitHub Actions 설정

**Labels:** `phase-4`, `deployment`, `ci-cd`, `priority-high`

**Title:** Epic 4.1: GitHub Actions 워크플로우 설정

**Body:**
```markdown
## 📌 작업 배경

코드를 main 브랜치에 푸시하면 자동으로 GitHub Pages에 배포되도록 CI/CD 파이프라인을 구축합니다.

## 📋 작업 내용

### 1. 워크플로우 파일 작성
- [ ] `.github/workflows/deploy.yml` 파일 생성
- [ ] 워크플로우 이름 설정
- [ ] 트리거 설정 (push to main)
- [ ] Job 정의
  - [ ] Checkout 액션
  - [ ] Node.js 설정
  - [ ] npm install
  - [ ] npm test (테스트 실행)
  - [ ] API 키 주입
  - [ ] GitHub Pages 배포

### 2. GitHub Secrets 확인
- [ ] HUGGING_FACE_API_KEY 설정 확인

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] .github/workflows/deploy.yml 파일 존재
- [ ] 워크플로우 문법 오류 없음
- [ ] GitHub Actions 탭에서 워크플로우 확인 가능
- [ ] 코드 푸시 시 워크플로우 자동 실행
- [ ] 모든 단계 성공 (초록색 체크)

## 📊 예상 시간

20분

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 4.1
- [Tech_Stack.md](../docs/Tech_Stack.md) - GitHub Actions
```

---

### Issue #10: Epic 4.2 - GitHub Pages 활성화

**Labels:** `phase-4`, `deployment`, `priority-high`

**Title:** Epic 4.2: GitHub Pages 활성화

**Body:**
```markdown
## 📌 작업 배경

GitHub Pages를 활성화하여 웹사이트를 공개 URL로 배포합니다.

## 📋 작업 내용

### 1. GitHub Pages 설정
- [ ] GitHub 저장소 → Settings 이동
- [ ] Pages 메뉴 클릭
- [ ] Source 설정
  - [ ] Branch: `gh-pages` 선택
  - [ ] Save 클릭

### 2. URL 확인
- [ ] `https://username.github.io/Busan-NSR-Navigator` 접속
- [ ] 페이지 로딩 확인

## ✅ 인수 조건 (Acceptance Criteria)

- [ ] GitHub Pages가 활성화되어 있음
- [ ] 공개 URL 접속 가능
- [ ] 모든 페이지 로딩됨
- [ ] HTTPS 적용됨

## 📊 예상 시간

10분

## 🔗 관련 문서

- [Task.md](../docs/Task.md) - Epic 4.2
- [README.md](../README.md) - 배포 URL
```

---

## 📝 Issue 생성 스크립트

모든 이슈를 한 번에 생성하려면 아래 스크립트를 사용하세요:

```bash
# Issue 템플릿 파일들이 .github/issues/ 폴더에 있다고 가정

gh issue create --title "Epic 1.1: 프로젝트 구조 생성" --label "phase-1,setup,priority-high" --body-file .github/issues/epic-1-1.md

gh issue create --title "Epic 1.2: Hugging Face API 설정" --label "phase-1,setup,api,priority-high" --body-file .github/issues/epic-1-2.md

gh issue create --title "Epic 1.3: 데이터 파일 작성 (JSON)" --label "phase-1,data,priority-high" --body-file .github/issues/epic-1-3.md

gh issue create --title "Epic 2.1: HTML 페이지 작성 (5개)" --label "phase-2,html,ui,priority-high" --body-file .github/issues/epic-2-1.md

gh issue create --title "Epic 2.2: CSS 스타일링 (반응형)" --label "phase-2,css,ui,priority-high" --body-file .github/issues/epic-2-2.md

gh issue create --title "Epic 3.1: utils.js 구현 (TDD)" --label "phase-3,javascript,tdd,priority-high" --body-file .github/issues/epic-3-1.md

gh issue create --title "Epic 3.2: AI 에이전트 구현 (TDD)" --label "phase-3,javascript,tdd,ai,priority-critical" --body-file .github/issues/epic-3-2.md

gh issue create --title "Epic 3.3: 경제성 계산기 구현 (TDD)" --label "phase-3,javascript,tdd,priority-high" --body-file .github/issues/epic-3-3.md

gh issue create --title "Epic 4.1: GitHub Actions 워크플로우 설정" --label "phase-4,deployment,ci-cd,priority-high" --body-file .github/issues/epic-4-1.md

gh issue create --title "Epic 4.2: GitHub Pages 활성화" --label "phase-4,deployment,priority-high" --body-file .github/issues/epic-4-2.md
```

---

**작성자:** 프로젝트 팀  
**최종 수정:** 2025-12-24  
**총 Issues:** 10개 (주요 Epic만)

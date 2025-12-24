# GitHub Issues 생성 스크립트
# 이 스크립트를 실행하면 10개의 Issues가 자동으로 생성됩니다

# Issue 1
gh issue create --title "Epic 1.1: 프로젝트 구조 생성" --label "phase-1,setup,priority-high" --body "## 📌 작업 배경

GitHub Pages 배포를 위한 정적 웹사이트 프로젝트의 기본 구조를 생성합니다.

## 📋 작업 내용

- [ ] GitHub 저장소 설정 (Public)
- [ ] 로컬에 클론
- [ ] 폴더 구조 생성 (css, js, data, assets/images, tests, .github/workflows)

## ✅ 인수 조건

- [ ] 모든 폴더가 생성되어 있음
- [ ] git status로 폴더 구조 확인 가능

## 📊 예상 시간: 30분"

# Issue 2
gh issue create --title "Epic 1.2: Hugging Face API 설정" --label "phase-1,setup,api,priority-high" --body "## 📌 작업 배경

AI 상담 기능을 위해 Hugging Face Inference API를 사용합니다.

## 📋 작업 내용

- [ ] Hugging Face 계정 생성 및 이메일 인증
- [ ] API 키 생성 (Settings → Access Tokens)
- [ ] GitHub Secrets 설정 (HUGGING_FACE_API_KEY)

## ✅ 인수 조건

- [ ] API 키가 발급되어 있음
- [ ] GitHub Secrets에 저장되어 있음

## 📊 예상 시간: 30분"

# Issue 3
gh issue create --title "Epic 1.3: 데이터 파일 작성 (JSON)" --label "phase-1,data,priority-high" --body "## 📌 작업 배경

정적 웹사이트이므로 모든 데이터를 JSON 파일로 저장합니다.

## 📋 작업 내용

- [ ] routes.json 작성 (수에즈, NSR 여름/겨울)
- [ ] ports.json, seasonal_costs.json, risk_indicators.json 작성
- [ ] knowledge.json 작성 (8개 문서, 키워드 설정)

## ✅ 인수 조건

- [ ] 모든 JSON 파일이 data/ 폴더에 생성됨
- [ ] JSON 형식 유효성 확인

## 📊 예상 시간: 1시간"

# Issue 4
gh issue create --title "Epic 2.1: HTML 페이지 작성 (5개)" --label "phase-2,html,ui,priority-high" --body "## 📌 작업 배경

Stitch 디자인을 기반으로 5개의 HTML 페이지를 작성합니다.

## 📋 작업 내용

- [ ] index.html (랜딩 페이지)
- [ ] dashboard.html (대시보드)
- [ ] input.html (데이터 입력)
- [ ] report.html (분석 보고서)
- [ ] mypage.html (마이페이지)

## ✅ 인수 조건

- [ ] 5개 HTML 파일 생성
- [ ] 브라우저에서 로딩 확인
- [ ] 시맨틱 HTML 사용

## 📊 예상 시간: 2시간"

# Issue 5
gh issue create --title "Epic 2.2: CSS 스타일링 (반응형)" --label "phase-2,css,ui,priority-high" --body "## 📌 작업 배경

Stitch 디자인을 CSS로 구현하고 반응형 디자인을 적용합니다.

## 📋 작업 내용

- [ ] style.css (CSS 변수, 전역 스타일, 레이아웃)
- [ ] components.css (버튼, 카드, 입력 필드)
- [ ] responsive.css (모바일/태블릿/데스크톱)

## ✅ 인수 조건

- [ ] 3개 CSS 파일 생성
- [ ] 반응형 디자인 작동
- [ ] Stitch 디자인과 유사

## 📊 예상 시간: 2시간"

# Issue 6
gh issue create --title "Epic 3.1: utils.js 구현 (TDD)" --label "phase-3,javascript,tdd,priority-high" --body "## 📌 작업 배경

유틸리티 함수들을 TDD 방식으로 구현합니다.

## 📋 작업 내용

- [ ] tests/utils.test.js 작성
- [ ] npm test 실행 (Red)
- [ ] js/utils.js 코드 작성
- [ ] npm test 재실행 (Green)
- [ ] 커버리지 100% 확인

## ✅ 인수 조건

- [ ] 모든 테스트 통과
- [ ] 커버리지 100%

## 📊 예상 시간: 30분"

# Issue 7
gh issue create --title "Epic 3.2: AI 에이전트 구현 (TDD)" --label "phase-3,javascript,tdd,ai,priority-critical" --body "## 📌 작업 배경

Hugging Face API를 사용한 AI 상담 기능을 TDD 방식으로 구현합니다.

## 📋 작업 내용

- [ ] tests/ai-agent.test.js 작성 (15개 이상)
- [ ] npm test 실행 (Red)
- [ ] js/ai-agent.js 코드 작성
- [ ] npm test 재실행 (Green)
- [ ] 커버리지 95% 이상 확인

## ✅ 인수 조건

- [ ] 모든 테스트 통과
- [ ] 커버리지 95% 이상

## 📊 예상 시간: 2시간"

# Issue 8
gh issue create --title "Epic 3.3: 경제성 계산기 구현 (TDD)" --label "phase-3,javascript,tdd,priority-high" --body "## 📌 작업 배경

항로별 비용, 시간, CO₂ 계산기를 TDD 방식으로 구현합니다.

## 📋 작업 내용

- [ ] tests/calculator.test.js 작성 (12개 이상)
- [ ] npm test 실행 (Red)
- [ ] js/calculator.js 코드 작성
- [ ] npm test 재실행 (Green)
- [ ] SOLID 원칙 적용

## ✅ 인수 조건

- [ ] 모든 테스트 통과
- [ ] 커버리지 95% 이상

## 📊 예상 시간: 1시간"

# Issue 9
gh issue create --title "Epic 4.1: GitHub Actions 워크플로우 설정" --label "phase-4,deployment,ci-cd,priority-high" --body "## 📌 작업 배경

코드 푸시 시 자동으로 GitHub Pages에 배포되도록 CI/CD 파이프라인을 구축합니다.

## 📋 작업 내용

- [ ] .github/workflows/deploy.yml 파일 생성
- [ ] 워크플로우 설정
- [ ] GitHub Secrets 확인

## ✅ 인수 조건

- [ ] 워크플로우 파일 존재
- [ ] 코드 푸시 시 자동 실행

## 📊 예상 시간: 20분"

# Issue 10
gh issue create --title "Epic 4.2: GitHub Pages 활성화" --label "phase-4,deployment,priority-high" --body "## 📌 작업 배경

GitHub Pages를 활성화하여 웹사이트를 공개 URL로 배포합니다.

## 📋 작업 내용

- [ ] GitHub 저장소 → Settings → Pages
- [ ] Source 설정 (gh-pages branch)
- [ ] URL 접속 확인

## ✅ 인수 조건

- [ ] GitHub Pages 활성화됨
- [ ] 공개 URL 접속 가능

## 📊 예상 시간: 10분"

Write-Host "✅ 10개의 GitHub Issues가 생성되었습니다!"

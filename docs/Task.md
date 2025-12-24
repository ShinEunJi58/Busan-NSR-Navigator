# 프로젝트 작업 목록 (Task List) - GitHub Pages 버전
# KOTRA 북극항로 스마트 네비게이터

**프로젝트 기간:** 2일 (12시간)  
**작성일:** 2025-12-24  
**전체 진행률:** 0% (0/45 작업 완료)  
**배포 방식:** GitHub Pages + GitHub Actions

---

## 📊 전체 진행 상황

```
Phase 1 (준비): ☐☐☐☐☐ 0%
Phase 2 (HTML/CSS): ☐☐☐☐☐ 0%
Phase 3 (JavaScript): ☐☐☐☐☐ 0%
Phase 4 (배포): ☐☐☐☐☐ 0%
```

---

## 🏗️ Phase 1: 준비 단계 (2시간)

> 프로젝트 구조 및 기본 설정

### Epic 1.1: 프로젝트 구조 생성

- [ ] GitHub 저장소 생성
  - [ ] 저장소 이름: `Busan-NSR-Navigator`
  - [ ] Public으로 설정
  - [ ] README.md 초기화
- [ ] 로컬에 클론
  - [ ] `git clone` 실행
  - [ ] 폴더 이동
- [ ] 폴더 구조 생성
  - [ ] `css/` 폴더
  - [ ] `js/` 폴더
  - [ ] `data/` 폴더
  - [ ] `assets/images/` 폴더
  - [ ] `.github/workflows/` 폴더
  - [ ] `docs/` 폴더

**예상 시간:** 30분

---

### Epic 1.2: Hugging Face API 설정

- [ ] Hugging Face 계정 생성 (무료)
  - [ ] https://huggingface.co 가입
  - [ ] 이메일 인증
- [ ] API 키 생성
  - [ ] Settings → Access Tokens
  - [ ] New token 생성
  - [ ] 키 복사 및 저장
- [ ] GitHub Secrets 설정
  - [ ] GitHub 저장소 → Settings → Secrets
  - [ ] New repository secret
  - [ ] Name: `HUGGING_FACE_API_KEY`
  - [ ] Value: (API 키 붙여넣기)

**예상 시간:** 30분

---

### Epic 1.3: 데이터 파일 작성

- [ ] `data/routes.json` 작성
  - [ ] 수에즈 항로 데이터
  - [ ] NSR 여름 데이터
  - [ ] NSR 겨울 데이터
- [ ] `data/ports.json` 작성
- [ ] `data/seasonal_costs.json` 작성
- [ ] `data/risk_indicators.json` 작성
- [ ] `data/knowledge.json` 작성
  - [ ] 8개 문서 내용 작성
  - [ ] 키워드 설정

**예상 시간:** 1시간

---

## 🎨 Phase 2: HTML/CSS 개발 (4시간)

> 5개 HTML 페이지 및 스타일 작성

### Epic 2.1: HTML 페이지 작성

- [ ] `index.html` (랜딩 페이지)
  - [ ] 헤더 (로고, 네비게이션)
  - [ ] 히어로 섹션
  - [ ] 주요 기능 카드 (3개)
  - [ ] CTA 버튼
  - [ ] 푸터
- [ ] `dashboard.html` (대시보드)
  - [ ] 사이드바 네비게이션
  - [ ] 항로 비교 카드
  - [ ] 그래프 영역 (3개)
  - [ ] AI 추천 섹션
- [ ] `input.html` (데이터 입력)
  - [ ] 입력 폼 (5개 필드)
  - [ ] 계산하기 버튼
  - [ ] 초기화 버튼
- [ ] `report.html` (분석 보고서)
  - [ ] 경제성 분석 카드
  - [ ] 리스크 분석 카드
  - [ ] AI 추천 품목 카드
  - [ ] PDF 다운로드 버튼
- [ ] `mypage.html` (마이페이지)
  - [ ] 사용자 정보 카드
  - [ ] 이용 통계 카드
  - [ ] 분석 이력 리스트

**예상 시간:** 2시간

---

### Epic 2.2: CSS 스타일링

- [ ] `css/style.css` (메인 스타일)
  - [ ] CSS 변수 정의 (색상, 폰트)
  - [ ] 전역 스타일 (body, h1-h6)
  - [ ] 레이아웃 (Grid, Flexbox)
- [ ] `css/components.css` (컴포넌트)
  - [ ] 버튼 스타일
  - [ ] 카드 스타일
  - [ ] 입력 필드 스타일
  - [ ] 네비게이션 스타일
- [ ] `css/responsive.css` (반응형)
  - [ ] 데스크톱 (1920px+)
  - [ ] 태블릿 (768px-1919px)
  - [ ] 모바일 (767px 이하)

**예상 시간:** 2시간

---

## 💻 Phase 3: JavaScript 개발 (5시간)

> JavaScript 로직 및 API 연동

### Epic 3.1: 기본 JavaScript 구조

- [ ] `js/main.js` (메인 로직)
  - [ ] 페이지 로드 이벤트
  - [ ] 네비게이션 로직
  - [ ] 세션 스토리지 관리
- [ ] `js/utils.js` (유틸리티)
  - [ ] 데이터 로딩 함수
  - [ ] 포맷팅 함수 (숫자, 날짜)
  - [ ] 에러 처리 함수

**예상 시간:** 30분

---

### Epic 3.2: AI 에이전트 구현

- [ ] `js/ai-agent.js` 작성
  - [ ] NSRAgent 클래스 생성
  - [ ] 지식 베이스 로딩
  - [ ] 키워드 검색 함수
    - [ ] extractKeywords()
    - [ ] calculateRelevance()
    - [ ] searchKnowledge()
  - [ ] AI API 호출 함수
    - [ ] ask() 함수
    - [ ] 프롬프트 구성
    - [ ] Fetch API 호출
    - [ ] 에러 처리
  - [ ] 테스트 (10개 질문)

**예상 시간:** 2시간

---

### Epic 3.3: 경제성 계산 구현

- [ ] `js/calculator.js` 작성
  - [ ] Calculator 클래스
  - [ ] calculate() 함수
    - [ ] 항로 데이터 로딩
    - [ ] 비용 계산
    - [ ] CO₂ 계산
  - [ ] compare() 함수
    - [ ] 수에즈 vs NSR 비교
    - [ ] 절감액 계산
  - [ ] 테스트 (5개 시나리오)

**예상 시간:** 1시간

---

### Epic 3.4: 차트 시각화 구현

- [ ] `js/charts.js` 작성
  - [ ] Chart.js 초기화
  - [ ] 비용 비교 차트
    - [ ] 막대 그래프
    - [ ] 데이터 바인딩
  - [ ] 시간 비교 차트
  - [ ] CO₂ 비교 차트
  - [ ] 반응형 설정

**예상 시간:** 1시간

---

### Epic 3.5: 리스크 모니터링 \u0026 추천

- [ ] `js/risk-monitor.js` 작성
  - [ ] 리스크 데이터 로딩
  - [ ] 해빙 농도 표시
  - [ ] 지정학 리스크 표시
- [ ] `js/recommender.js` 작성
  - [ ] 품목 추천 로직
  - [ ] 추천 결과 표시

**예상 시간:** 30분

---

## 🚀 Phase 4: 배포 및 테스트 (1시간)

> GitHub Actions 설정 및 배포

### Epic 4.1: GitHub Actions 설정

- [ ] `.github/workflows/deploy.yml` 작성
  - [ ] 워크플로우 이름 설정
  - [ ] 트리거 설정 (push to main)
  - [ ] Job 정의
    - [ ] Checkout 액션
    - [ ] API 키 주입
    - [ ] GitHub Pages 배포
- [ ] GitHub Secrets 확인
  - [ ] HUGGING_FACE_API_KEY 설정 확인

**예상 시간:** 20분

---

### Epic 4.2: GitHub Pages 활성화

- [ ] GitHub 저장소 Settings 이동
- [ ] Pages 메뉴 클릭
- [ ] Source 설정
  - [ ] Branch: `gh-pages` 선택
  - [ ] Save 클릭
- [ ] URL 확인
  - [ ] `https://username.github.io/Busan-NSR-Navigator`

**예상 시간:** 10분

---

### Epic 4.3: 배포 테스트

- [ ] 코드 푸시
  - [ ] `git add .`
  - [ ] `git commit -m "Initial deployment"`
  - [ ] `git push origin main`
- [ ] GitHub Actions 확인
  - [ ] Actions 탭 이동
  - [ ] 워크플로우 실행 확인
  - [ ] 초록색 체크 확인 ✅
- [ ] 배포된 사이트 테스트
  - [ ] URL 접속
  - [ ] 모든 페이지 로딩 확인
  - [ ] AI 상담 기능 테스트
  - [ ] 경제성 계산 테스트
  - [ ] 그래프 렌더링 확인
  - [ ] 반응형 디자인 확인 (모바일/태블릿)

**예상 시간:** 30분

---

## 📝 사용 방법

### 작업 시작할 때
1. 이 파일 열기
2. 다음 할 일 확인 (☐ 표시)
3. 작업 시작

### 작업 완료할 때
1. `☐`를 `✅`로 변경
2. 파일 저장
3. Git 커밋
4. 다음 작업 확인

### 진행 중일 때
1. `☐`를 `⏳`로 변경
2. 작업 계속

---

## 🎯 우선순위

### 🔴 필수 (Must Have)
- Phase 1 전체
- Phase 2 전체
- Phase 3: Epic 3.1, 3.2, 3.3, 3.4
- Phase 4 전체

### 🟡 중요 (Should Have)
- Phase 3: Epic 3.5

### 🟢 선택 (Nice to Have)
- 추가 페이지 (About, Contact)
- 고급 애니메이션
- PWA 기능

---

## 📊 일일 목표

### Day 1 (6시간)
- ✅ Phase 1 완료 (2시간)
- ✅ Phase 2 완료 (4시간)

### Day 2 (6시간)
- ✅ Phase 3 완료 (5시간)
- ✅ Phase 4 완료 (1시간)

---

## 💡 팁

### 로컬 테스트
```bash
# Python 간단 서버
python -m http.server 8000

# 브라우저에서
http://localhost:8000
```

### Git 명령어
```bash
# 변경사항 확인
git status

# 커밋
git add .
git commit -m "작업 내용"

# 푸시 (자동 배포 트리거)
git push origin main
```

### 디버깅
```javascript
// 브라우저 콘솔에서
console.log('디버그 메시지');

// 에러 확인
try {
  // 코드
} catch (error) {
  console.error('에러:', error);
}
```

### API 테스트
```javascript
// Hugging Face API 테스트
const testAPI = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputs: '테스트 질문' })
  });
  console.log(await response.json());
};
```

---

## 🚨 주의사항

### API 키 보안
- ❌ 코드에 직접 하드코딩 금지
- ✅ GitHub Secrets 사용
- ✅ `.gitignore`에 `config.js` 추가

### CORS 문제
- Hugging Face API는 CORS 허용
- 로컬 테스트 시 서버 필요 (python -m http.server)

### Git 커밋 메시지
```bash
# 좋은 예
git commit -m "Add AI agent functionality"
git commit -m "Fix chart rendering bug"

# 나쁜 예
git commit -m "update"
git commit -m "fix"
```

---

## ✅ 체크리스트

### 개발 전
- [ ] GitHub 계정 준비
- [ ] Hugging Face 계정 준비
- [ ] VS Code 설치
- [ ] Git 설치

### 개발 중
- [ ] 매 작업마다 Git 커밋
- [ ] 로컬에서 테스트
- [ ] 브라우저 콘솔 에러 확인

### 배포 전
- [ ] 모든 기능 테스트
- [ ] API 키 GitHub Secrets 설정
- [ ] GitHub Actions 워크플로우 작성
- [ ] GitHub Pages 활성화

### 배포 후
- [ ] 배포 URL 접속 확인
- [ ] 모든 페이지 작동 확인
- [ ] AI 기능 작동 확인
- [ ] 모바일 반응형 확인

---

## 🎤 면접 시연 준비

### 시연 시나리오 (3분)
1. **랜딩 페이지** (30초)
   - 프로젝트 소개
   - 주요 기능 설명

2. **AI 상담** (1분)
   - 질문 입력
   - 답변 확인
   - 출처 표시

3. **경제성 분석** (1분)
   - 데이터 입력
   - 결과 확인
   - 그래프 설명

4. **배포 설명** (30초)
   - GitHub Actions 자동 배포
   - 공개 URL 공유

### 예상 질문 답변 준비
- [ ] "왜 GitHub Pages를 선택했나요?"
- [ ] "AI는 어떻게 구현했나요?"
- [ ] "배포는 어떻게 자동화했나요?"
- [ ] "비용은 얼마나 드나요?"

---

**작성자:** 프로젝트 팀  
**최종 수정:** 2025-12-24  
**다음 업데이트:** 작업 진행하면서 실시간 업데이트

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
> **중요: 코어 로직만 TDD 적용, UI는 브라우저에서 수동 테스트!**

### Epic 3.1: 기본 JavaScript 구조 (TDD)

#### Step 1: utils.js 테스트 작성
- [ ] `tests/utils.test.js` 파일 생성
- [ ] formatNumber() 테스트 작성
  - [ ] 천 단위 콤마 테스트
  - [ ] 소수점 처리 테스트
  - [ ] 음수 처리 테스트
- [ ] formatDate() 테스트 작성
  - [ ] 날짜 포맷팅 테스트
  - [ ] 잘못된 날짜 처리 테스트
- [ ] validateInput() 테스트 작성
  - [ ] 빈 값 검증 테스트
  - [ ] 숫자 검증 테스트
  - [ ] 문자열 검증 테스트

#### Step 2: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인 (함수 미정의)

#### Step 3: utils.js 코드 작성
- [ ] `js/utils.js` 파일 생성
- [ ] formatNumber() 함수 구현
- [ ] formatDate() 함수 구현
- [ ] validateInput() 함수 구현

#### Step 4: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

#### Step 5: 리팩토링 및 검증
- [ ] 코드 리팩토링
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 100% 확인

#### Step 6: main.js 작성 (UI - 테스트 제외)
- [ ] `js/main.js` 파일 생성
- [ ] 페이지 로드 이벤트 추가
- [ ] 네비게이션 로직 추가
- [ ] 세션 스토리지 관리 추가

**예상 시간:** 30분

---

### Epic 3.2: AI 에이전트 구현 (TDD)

#### Step 1: AI 에이전트 테스트 작성
- [ ] `tests/ai-agent.test.js` 파일 생성
- [ ] extractKeywords() 테스트 작성
  - [ ] 불용어 제거 테스트
  - [ ] 소문자 변환 테스트
  - [ ] 빈 문자열 처리 테스트
  - [ ] 특수문자 처리 테스트
- [ ] calculateRelevance() 테스트 작성
  - [ ] 완전 일치 테스트
  - [ ] 부분 일치 테스트
  - [ ] 불일치 테스트
  - [ ] 빈 배열 처리 테스트
- [ ] searchKnowledge() 테스트 작성
  - [ ] 관련 문서 검색 테스트
  - [ ] 상위 3개 반환 테스트
  - [ ] 점수 순 정렬 테스트
  - [ ] 관련 문서 없을 때 테스트
- [ ] ask() 함수 Mock 테스트 작성
  - [ ] API 호출 Mock 설정
  - [ ] 정상 응답 테스트
  - [ ] 에러 처리 테스트

#### Step 2: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인 (클래스 미정의)

#### Step 3: AI 에이전트 코드 작성
- [ ] `js/ai-agent.js` 파일 생성
- [ ] NSRAgent 클래스 생성
- [ ] init() 함수 구현 (지식 베이스 로딩)
- [ ] extractKeywords() 함수 구현
- [ ] calculateRelevance() 함수 구현
- [ ] searchKnowledge() 함수 구현
- [ ] ask() 함수 구현
  - [ ] 프롬프트 구성
  - [ ] Fetch API 호출
  - [ ] 에러 처리

#### Step 4: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

#### Step 5: Edge Case 테스트 추가
- [ ] 대용량 텍스트 처리 테스트
- [ ] 특수 문자 포함 질문 테스트
- [ ] API 타임아웃 테스트

#### Step 6: 리팩토링 및 검증
- [ ] 코드 리팩토링
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 95% 이상 확인

**예상 시간:** 2시간

---

### Epic 3.3: 경제성 계산 구현 (TDD)

#### Step 1: Calculator 테스트 작성
- [ ] `tests/calculator.test.js` 파일 생성
- [ ] calculate() 테스트 작성
  - [ ] 수에즈 항로 비용 계산 테스트
  - [ ] NSR 여름 비용 계산 테스트
  - [ ] NSR 겨울 비용 계산 테스트 (20% 할증)
  - [ ] 잘못된 항로명 처리 테스트
  - [ ] 음수 TEU 처리 테스트
- [ ] compare() 테스트 작성
  - [ ] 수에즈 vs NSR 비교 테스트
  - [ ] 절감액 계산 정확도 테스트
  - [ ] 시간 절감 계산 테스트
  - [ ] CO₂ 절감 계산 테스트
- [ ] calculateCO2() 테스트 작성
  - [ ] CO₂ 계산 정확도 테스트
  - [ ] 0 TEU 처리 테스트

#### Step 2: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인 (클래스 미정의)

#### Step 3: Calculator 코드 작성
- [ ] `js/calculator.js` 파일 생성
- [ ] Calculator 클래스 생성
- [ ] loadData() 함수 구현
- [ ] calculate() 함수 구현
  - [ ] 항로 데이터 로딩
  - [ ] 비용 계산 로직
  - [ ] CO₂ 계산 호출
- [ ] compare() 함수 구현
  - [ ] 수에즈 vs NSR 계산
  - [ ] 절감액 계산
- [ ] calculateCO2() 함수 구현

#### Step 4: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

#### Step 5: 리팩토링 및 검증
- [ ] 코드 리팩토링 (SOLID 원칙 적용)
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 95% 이상 확인

**예상 시간:** 1시간

---

### Epic 3.4: 차트 시각화 구현 (UI - 테스트 제외)

- [ ] `js/charts.js` 파일 생성
- [ ] Chart.js 초기화
  - [ ] CDN 로드 확인
  - [ ] Canvas 요소 선택
- [ ] 비용 비교 차트 구현
  - [ ] 막대 그래프 설정
  - [ ] 데이터 바인딩
  - [ ] 색상 및 레이블 설정
- [ ] 시간 비교 차트 구현
  - [ ] 막대 그래프 설정
  - [ ] 데이터 바인딩
- [ ] CO₂ 비교 차트 구현
  - [ ] 막대 그래프 설정
  - [ ] 데이터 바인딩
- [ ] 반응형 설정
  - [ ] 모바일 크기 조정
  - [ ] 태블릿 크기 조정
- [ ] 브라우저에서 테스트
  - [ ] 차트 렌더링 확인
  - [ ] 반응형 동작 확인

**예상 시간:** 1시간

---

### Epic 3.5: 리스크 모니터링 & 추천 (TDD)

#### Step 1: risk-monitor.js 테스트 작성
- [ ] `tests/risk-monitor.test.js` 파일 생성
- [ ] analyzeRisk() 테스트 작성
  - [ ] 해빙 농도 분석 테스트
  - [ ] 안전 레벨 판단 테스트
  - [ ] 경고 레벨 판단 테스트
  - [ ] 위험 레벨 판단 테스트
- [ ] getRiskLevel() 테스트 작성
  - [ ] 레벨 계산 정확도 테스트
  - [ ] 경계값 테스트

#### Step 2: recommender.js 테스트 작성
- [ ] `tests/recommender.test.js` 파일 생성
- [ ] recommend() 테스트 작성
  - [ ] 제조업 추천 테스트
  - [ ] 식품업 추천 테스트
  - [ ] 패션업 추천 테스트
  - [ ] 전자업 추천 테스트
- [ ] calculateScore() 테스트 작성
  - [ ] 점수 계산 정확도 테스트
  - [ ] 납기 민감도 반영 테스트

#### Step 3: 테스트 실행 (Red)
- [ ] `npm test` 실행
- [ ] 실패 확인

#### Step 4: 코드 작성
- [ ] `js/risk-monitor.js` 파일 생성
  - [ ] RiskMonitor 클래스 생성
  - [ ] loadData() 함수 구현
  - [ ] analyzeRisk() 함수 구현
  - [ ] getRiskLevel() 함수 구현
- [ ] `js/recommender.js` 파일 생성
  - [ ] ItemRecommender 클래스 생성
  - [ ] recommend() 함수 구현
  - [ ] calculateScore() 함수 구현

#### Step 5: 테스트 재실행 (Green)
- [ ] `npm test` 재실행
- [ ] 모든 테스트 통과 확인

#### Step 6: 리팩토링 및 검증
- [ ] 코드 리팩토링
- [ ] `npm run test:coverage` 실행
- [ ] 커버리지 90% 이상 확인

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

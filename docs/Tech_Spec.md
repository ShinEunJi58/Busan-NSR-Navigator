# 기술 명세서 (Tech Spec)
# KOTRA 북극항로 스마트 네비게이터

**프로젝트명:** NSR Smart Navigator  
**버전:** 1.0  
**작성일:** 2025-12-24  
**목적:** 상세 기술 구현 가이드

---

## 📋 목차

1. [시스템 아키텍처](#시스템-아키텍처)
2. [AI 에이전트 상세 설계](#ai-에이전트-상세-설계)
3. [데이터베이스 설계](#데이터베이스-설계)
4. [API 설계](#api-설계)
5. [UI/UX 설계](#uiux-설계)
6. [보안 정책](#보안-정책)
7. [성능 최적화](#성능-최적화)
8. [배포 전략](#배포-전략)

---

## 🏗️ 시스템 아키텍처

### 전체 구조

```
사용자
  ↓
┌─────────────────────────────────────┐
│    Streamlit Web Interface          │
│    (포트: 8501)                      │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│    Application Layer (app.py)       │
│    - 라우팅                          │
│    - 세션 관리                       │
│    - UI 렌더링                       │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│    Business Logic Layer              │
│    - ai_agent.py (RAG)              │
│    - calculator.py (경제성)          │
│    - risk_monitor.py (리스크)        │
│    - recommender.py (추천)           │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│    AI/Data Layer                     │
│    - Ollama (LLM)                   │
│    - ChromaDB (벡터 DB)             │
│    - CSV/Markdown (데이터)          │
└─────────────────────────────────────┘
```

### 디렉토리 구조

```
Busan-NSR-Navigator/
│
├── app.py                      # 메인 애플리케이션
├── requirements.txt            # 패키지 목록
├── README.md                   # 프로젝트 설명
├── .env                        # 환경 변수 (선택)
├── .gitignore                  # Git 제외 파일
│
├── src/                        # 소스 코드
│   ├── __init__.py
│   ├── ai_agent.py            # AI 에이전트
│   ├── calculator.py          # 경제성 계산
│   ├── risk_monitor.py        # 리스크 모니터링
│   ├── recommender.py         # 품목 추천
│   └── utils.py               # 유틸리티 함수
│
├── data/                       # 데이터 파일
│   ├── route_data.csv
│   ├── ports.csv
│   ├── seasonal_costs.csv
│   └── risk_indicators.json
│
├── knowledge_base/             # AI 지식 베이스
│   ├── 01_nsr_basic_guide.md
│   ├── 02_seasonal_operations.md
│   ├── 03_cost_structure.md
│   ├── 04_risk_factors.md
│   ├── 05_suitable_items.md
│   ├── 06_success_cases.md
│   ├── 07_regulations.md
│   └── 08_faq.md
│
├── chroma_db/                  # 벡터 DB (자동 생성)
│   └── (임베딩 파일들)
│
├── docs/                       # 문서
│   ├── PRD.md
│   ├── MVP_Architecture.md
│   ├── Tech_Stack.md
│   └── Tech_Spec.md           # 본 문서
│
├── tests/                      # 테스트 (선택)
│   ├── test_ai_agent.py
│   └── test_calculator.py
│
└── assets/                     # 이미지/아이콘
    └── logo.png
```

---

## 🤖 AI 에이전트 상세 설계

### 1. RAG 시스템 구조

#### 1.1 문서 처리 파이프라인

```
[Markdown 문서들]
    ↓
[문서 로딩] (DirectoryLoader)
    ↓
[텍스트 청킹] (RecursiveCharacterTextSplitter)
    - 청크 크기: 500자
    - 오버랩: 50자
    ↓
[임베딩 생성] (OllamaEmbeddings)
    - 모델: llama3.2:3b
    - 차원: 4096
    ↓
[벡터 DB 저장] (ChromaDB)
    - 저장 위치: ./chroma_db
    ↓
[검색 준비 완료]
```

#### 1.2 질의응답 프로세스

```
[사용자 질문]
    ↓
[질문 임베딩 생성]
    ↓
[벡터 DB 유사도 검색]
    - 검색 방식: Cosine Similarity
    - 반환 개수: 상위 3개 문서
    ↓
[관련 문서 추출]
    ↓
[LLM에 컨텍스트 전달]
    - 시스템 프롬프트
    - 검색된 문서
    - 사용자 질문
    ↓
[답변 생성] (Ollama)
    - Temperature: 0.7
    - Max tokens: 500
    ↓
[답변 + 출처 반환]
```

### 2. Ollama 설정

#### 2.1 모델 설정

```python
# Ollama 모델 설정
MODEL_NAME = "llama3.2:3b"
BASE_URL = "http://localhost:11434"
TEMPERATURE = 0.7  # 창의성 (0~1)
MAX_TOKENS = 500   # 최대 답변 길이
```

#### 2.2 시스템 프롬프트

```python
SYSTEM_PROMPT = """
당신은 KOTRA의 북극항로(NSR) 전문 상담 AI 에이전트입니다.

역할:
- 중소기업의 북극항로 관련 질문에 정확하고 친절하게 답변
- 제공된 문서(knowledge_base)의 정보만 사용
- 모르는 내용은 "확인이 필요합니다"라고 솔직하게 답변

답변 형식:
1. 핵심 답변 (2-3문장)
2. 상세 설명 (필요시)
3. 추가 참고 사항

톤앤매너:
- 전문적이지만 친근하게
- 중소기업 담당자가 이해하기 쉽게
- 구체적인 수치와 예시 포함

제약사항:
- 500자 이내로 답변
- 출처를 명확히 표시
- 추측하지 않기
"""
```

#### 2.3 RAG 체인 설정

```python
from langchain.chains import RetrievalQA
from langchain.llms import Ollama
from langchain.prompts import PromptTemplate

# 프롬프트 템플릿
template = """
{system_prompt}

참고 문서:
{context}

질문: {question}

답변:
"""

PROMPT = PromptTemplate(
    template=template,
    input_variables=["context", "question"],
    partial_variables={"system_prompt": SYSTEM_PROMPT}
)

# RAG 체인 구성
qa_chain = RetrievalQA.from_chain_type(
    llm=Ollama(
        model=MODEL_NAME,
        base_url=BASE_URL,
        temperature=TEMPERATURE
    ),
    chain_type="stuff",
    retriever=vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 3}
    ),
    return_source_documents=True,
    chain_type_kwargs={"prompt": PROMPT}
)
```

### 3. ChromaDB 설정

#### 3.1 벡터 DB 초기화

```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OllamaEmbeddings

# 임베딩 모델
embeddings = OllamaEmbeddings(
    model="llama3.2:3b",
    base_url="http://localhost:11434"
)

# 벡터 DB 생성
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="chroma_db",
    collection_name="nsr_knowledge"
)

# 저장
vectorstore.persist()
```

#### 3.2 검색 설정

```python
# 검색 파라미터
SEARCH_TYPE = "similarity"  # 유사도 검색
K = 3  # 상위 3개 문서 반환
SCORE_THRESHOLD = 0.7  # 최소 유사도 점수

# 검색 실행
retriever = vectorstore.as_retriever(
    search_type=SEARCH_TYPE,
    search_kwargs={
        "k": K,
        "score_threshold": SCORE_THRESHOLD
    }
)
```

---

## 📊 데이터베이스 설계

### 1. CSV 파일 스키마

#### 1.1 route_data.csv (항로 데이터)

```csv
route,origin,destination,distance_km,lead_time_days,base_cost_usd,cost_per_teu,co2_per_km,season,ice_class_required
```

**필드 설명:**
- `route` (문자열): 항로 이름 (Suez, NSR_summer, NSR_winter)
- `origin` (문자열): 출발지 (Busan)
- `destination` (문자열): 목적지 (Rotterdam, Hamburg 등)
- `distance_km` (정수): 거리 (km)
- `lead_time_days` (정수): 소요 시간 (일)
- `base_cost_usd` (정수): 기본 비용 (USD)
- `cost_per_teu` (정수): TEU당 비용 (USD)
- `co2_per_km` (실수): km당 CO₂ 배출량 (톤)
- `season` (문자열): 계절 (all, summer, winter)
- `ice_class_required` (문자열): 쇄빙선 필요 여부 (yes/no)

**예시 데이터:**
```csv
Suez,Busan,Rotterdam,21000,40,5000,800,0.015,all,no
NSR_summer,Busan,Rotterdam,12700,25,3000,1000,0.015,summer,yes
NSR_winter,Busan,Rotterdam,12700,28,3000,1200,0.015,winter,yes_icebreaker
```

#### 1.2 ports.csv (항구 정보)

```csv
port_name,country,region,latitude,longitude,nsr_compatible
```

**필드 설명:**
- `port_name` (문자열): 항구 이름
- `country` (문자열): 국가
- `region` (문자열): 지역 (Asia, Europe)
- `latitude` (실수): 위도
- `longitude` (실수): 경도
- `nsr_compatible` (문자열): NSR 호환 여부 (yes/no)

**예시 데이터:**
```csv
Busan,South Korea,Asia,35.1796,129.0756,yes
Rotterdam,Netherlands,Europe,51.9225,4.4792,yes
Hamburg,Germany,Europe,53.5511,9.9937,yes
```

#### 1.3 seasonal_costs.csv (계절별 비용)

```csv
season,month_start,month_end,ice_surcharge_percent,icebreaker_cost_usd,risk_level
```

**예시 데이터:**
```csv
summer,7,10,0,0,low
winter,11,4,20,15000,medium
```

### 2. JSON 파일 스키마

#### 2.1 risk_indicators.json (리스크 지표)

```json
{
  "sea_ice": {
    "current_concentration": 45,
    "threshold": 50,
    "status": "safe",
    "last_updated": "2025-12-24T00:00:00Z"
  },
  "geopolitical": {
    "level": "caution",
    "factors": [
      "러시아-유럽 관계",
      "제재 영향"
    ],
    "insurance_rate_multiplier": 1.2
  },
  "weather": {
    "forecast": "양호",
    "wind_speed_knots": 15,
    "visibility": "good",
    "wave_height_meters": 2.5
  },
  "news": [
    {
      "date": "2025-12-20",
      "title": "북극항로 해빙 속도 가속화",
      "summary": "예년보다 1.5배 빠른 해빙...",
      "source": "해양수산부"
    }
  ]
}
```

---

## 🔌 API 설계

### 1. 내부 함수 API

#### 1.1 AI 에이전트 API

```python
class NSRAgent:
    """북극항로 AI 상담 에이전트"""
    
    def ask(self, question: str) -> dict:
        """
        질문에 답변
        
        Args:
            question (str): 사용자 질문
            
        Returns:
            dict: {
                "answer": str,      # 답변 텍스트
                "sources": list,    # 출처 문서 리스트
                "confidence": float # 신뢰도 (0~1)
            }
        """
        pass
```

**사용 예시:**
```python
agent = NSRAgent()
response = agent.ask("겨울에도 북극항로를 이용할 수 있나요?")

print(response["answer"])
# "네, 가능합니다. 겨울철(11-4월)에도 이용 가능하지만..."

print(response["sources"])
# [{"file": "seasonal_operations.md", "content": "..."}]

print(response["confidence"])
# 0.92
```

#### 1.2 경제성 계산 API

```python
class CostCalculator:
    """항로 비용 계산기"""
    
    def calculate(
        self,
        route: str,
        teu: int,
        season: str = "summer"
    ) -> dict:
        """
        비용 계산
        
        Args:
            route (str): 항로 ("Suez" 또는 "NSR")
            teu (int): 컨테이너 수 (TEU)
            season (str): 계절 ("summer" 또는 "winter")
            
        Returns:
            dict: {
                "route": str,
                "distance_km": int,
                "lead_time_days": int,
                "total_cost_usd": float,
                "co2_tons": float,
                "season": str
            }
        """
        pass
    
    def compare(
        self,
        teu: int,
        season: str = "summer"
    ) -> dict:
        """
        수에즈 vs NSR 비교
        
        Returns:
            dict: {
                "suez": dict,
                "nsr": dict,
                "savings": {
                    "cost_usd": float,
                    "days": int,
                    "distance_km": int,
                    "co2_tons": float
                }
            }
        """
        pass
```

**사용 예시:**
```python
calc = CostCalculator()
comparison = calc.compare(teu=10, season="summer")

print(comparison["savings"]["cost_usd"])
# 8000.0 (절감액)

print(comparison["savings"]["days"])
# 15 (단축 일수)
```

#### 1.3 품목 추천 API

```python
class ItemRecommender:
    """품목 추천 엔진"""
    
    def recommend(
        self,
        industry: str,
        urgency: int,
        volume: str
    ) -> dict:
        """
        품목 추천
        
        Args:
            industry (str): 산업군
            urgency (int): 납기 민감도 (1~5)
            volume (str): 물동량 ("소량" 또는 "대량")
            
        Returns:
            dict: {
                "recommendation": str,  # "강력 추천", "검토 필요", "비추천"
                "reason": str,
                "items": list,
                "confidence": float
            }
        """
        pass
```

---

## 🎨 UI/UX 설계

### 1. 화면 구성

#### 1.1 레이아웃

```
┌────────────────────────────────────────────────┐
│  [사이드바]          [메인 화면]                │
│  - 로고              ┌─────────────────────┐   │
│  - 메뉴              │                     │   │
│    • Home            │                     │   │
│    • AI 상담         │     콘텐츠 영역      │   │
│    • 경제성          │                     │   │
│    • 리스크          │                     │   │
│    • 품목 추천       │                     │   │
│  - 정보              └─────────────────────┘   │
└────────────────────────────────────────────────┘
```

#### 1.2 색상 팔레트

```python
# 주요 색상
PRIMARY_COLOR = "#1f77b4"      # 파란색 (신뢰감)
SECONDARY_COLOR = "#ff7f0e"    # 주황색 (강조)
SUCCESS_COLOR = "#2ca02c"      # 초록색 (성공)
WARNING_COLOR = "#ff9800"      # 노란색 (주의)
DANGER_COLOR = "#d62728"       # 빨간색 (위험)
BACKGROUND_COLOR = "#f0f2f6"   # 연한 회색 (배경)
TEXT_COLOR = "#262730"         # 진한 회색 (텍스트)
```

#### 1.3 Streamlit 설정

```python
# app.py
import streamlit as st

# 페이지 설정
st.set_page_config(
    page_title="NSR Smart Navigator",
    page_icon="🚢",
    layout="wide",
    initial_sidebar_state="expanded",
    menu_items={
        'Get Help': 'https://kotra.or.kr',
        'Report a bug': None,
        'About': "KOTRA 북극항로 스마트 네비게이터 v1.0"
    }
)

# 커스텀 CSS
st.markdown("""
    <style>
    .main {
        background-color: #f0f2f6;
    }
    .stButton>button {
        width: 100%;
        background-color: #1f77b4;
        color: white;
    }
    .stButton>button:hover {
        background-color: #155a8a;
    }
    </style>
""", unsafe_allow_html=True)
```

### 2. 화면별 상세 설계

#### 2.1 AI 상담 화면

```python
# 대화 기록 표시
for chat in st.session_state.chat_history:
    with st.chat_message("user"):
        st.write(chat["question"])
    
    with st.chat_message("assistant"):
        st.write(chat["answer"])
        
        # 출처 표시
        with st.expander("📄 출처 보기"):
            for source in chat["sources"]:
                st.caption(f"• {source['file']}")

# 질문 입력
question = st.chat_input("질문을 입력하세요...")

if question:
    # AI 답변 생성
    with st.spinner("답변 생성 중..."):
        response = agent.ask(question)
    
    # 화면 표시
    st.chat_message("user").write(question)
    st.chat_message("assistant").write(response["answer"])
```

#### 2.2 경제성 진단 화면

```python
# 입력 영역
col1, col2, col3 = st.columns(3)

with col1:
    destination = st.selectbox(
        "목적지",
        ["Rotterdam", "Hamburg", "Antwerp"]
    )

with col2:
    teu = st.number_input(
        "컨테이너 수 (TEU)",
        min_value=1,
        max_value=1000,
        value=10
    )

with col3:
    season = st.selectbox(
        "계절",
        ["여름 (7-10월)", "겨울 (11-4월)"]
    )

# 계산 버튼
if st.button("🔍 항로 비교하기", type="primary"):
    # 계산 수행
    comparison = calculator.compare(teu, season)
    
    # 결과 표시
    st.header("📊 비교 결과")
    
    # 메트릭 카드
    m1, m2, m3 = st.columns(3)
    m1.metric("비용 절감", f"${comparison['savings']['cost_usd']:,.0f}")
    m2.metric("시간 단축", f"{comparison['savings']['days']} 일")
    m3.metric("CO₂ 감축", f"{comparison['savings']['co2_tons']:.1f} 톤")
    
    # 그래프
    fig = px.bar(...)
    st.plotly_chart(fig, use_container_width=True)
```

---

## 🔒 보안 정책

### 1. 데이터 보안

#### 1.1 로컬 실행
- ✅ 모든 데이터는 로컬 PC에 저장
- ✅ 외부 API 호출 없음 (Ollama 로컬 실행)
- ✅ 인터넷 연결 불필요 (실행 시)

#### 1.2 데이터 암호화
```python
# 민감한 설정은 .env 파일에 저장
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv("API_KEY", "")  # 선택사항
```

### 2. 세션 관리

```python
# Streamlit 세션 상태
if 'chat_history' not in st.session_state:
    st.session_state.chat_history = []

if 'user_id' not in st.session_state:
    st.session_state.user_id = None
```

### 3. 입력 검증

```python
def validate_input(text: str, max_length: int = 500) -> bool:
    """입력 검증"""
    if not text or len(text) > max_length:
        return False
    
    # SQL Injection 방지 (CSV 사용으로 불필요하지만 예시)
    dangerous_chars = ["'", '"', ";", "--"]
    if any(char in text for char in dangerous_chars):
        return False
    
    return True
```

---

## ⚡ 성능 최적화

### 1. 캐싱

```python
# Streamlit 캐싱
@st.cache_resource
def load_agent():
    """AI 에이전트 로드 (1회만)"""
    return NSRAgent()

@st.cache_data
def load_route_data():
    """항로 데이터 로드 (1회만)"""
    return pd.read_csv("data/route_data.csv")
```

### 2. 벡터 DB 최적화

```python
# 벡터 DB 인덱스 설정
vectorstore = Chroma(
    persist_directory="chroma_db",
    embedding_function=embeddings,
    collection_metadata={
        "hnsw:space": "cosine",  # 코사인 유사도
        "hnsw:M": 16,            # 연결 수
        "hnsw:ef_construction": 200  # 구축 시 탐색 수
    }
)
```

### 3. 응답 시간 목표

| 기능 | 목표 시간 | 최대 시간 |
|---|---|---|
| AI 답변 생성 | 2초 | 5초 |
| 경제성 계산 | 0.5초 | 1초 |
| 그래프 렌더링 | 0.5초 | 1초 |
| 페이지 로드 | 1초 | 2초 |

---

## 🚀 배포 전략

### 1. 로컬 배포

```bash
# 1. 저장소 클론
git clone https://github.com/your-repo/Busan-NSR-Navigator.git
cd Busan-NSR-Navigator

# 2. 가상환경 생성
python -m venv venv
venv\Scripts\activate

# 3. 패키지 설치
pip install -r requirements.txt

# 4. Ollama 설치 및 모델 다운로드
winget install Ollama.Ollama
ollama pull llama3.2:3b

# 5. 벡터 DB 초기화
python src/ai_agent.py --init

# 6. 앱 실행
streamlit run app.py
```

### 2. Docker 배포 (선택)

```dockerfile
# Dockerfile
FROM python:3.10-slim

# Ollama 설치
RUN curl -fsSL https://ollama.ai/install.sh | sh

# 작업 디렉토리
WORKDIR /app

# 패키지 설치
COPY requirements.txt .
RUN pip install -r requirements.txt

# 소스 복사
COPY . .

# 모델 다운로드
RUN ollama pull llama3.2:3b

# 포트 노출
EXPOSE 8501

# 실행
CMD ["streamlit", "run", "app.py"]
```

```bash
# Docker 빌드 및 실행
docker build -t nsr-navigator .
docker run -p 8501:8501 nsr-navigator
```

### 3. Streamlit Cloud 배포 (무료)

1. GitHub 저장소 연결
2. Streamlit Cloud에서 앱 생성
3. 자동 배포

**주의:** Ollama는 로컬 전용이므로 클라우드 배포 시 대안 필요

---

## 📝 환경 변수

### .env 파일 (선택사항)

```bash
# Ollama 설정
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2:3b

# ChromaDB 설정
CHROMA_PERSIST_DIR=chroma_db

# Streamlit 설정
STREAMLIT_SERVER_PORT=8501
STREAMLIT_SERVER_ADDRESS=localhost
```

---

## 🧪 테스트 전략

### 1. 단위 테스트

```python
# tests/test_ai_agent.py
import pytest
from src.ai_agent import NSRAgent

def test_agent_initialization():
    """AI 에이전트 초기화 테스트"""
    agent = NSRAgent()
    assert agent is not None
    assert agent.vectorstore is not None

def test_agent_ask():
    """질문-답변 테스트"""
    agent = NSRAgent()
    response = agent.ask("북극항로란 무엇인가요?")
    
    assert "answer" in response
    assert "sources" in response
    assert len(response["answer"]) > 0
```

### 2. 통합 테스트

```python
# tests/test_integration.py
def test_full_workflow():
    """전체 워크플로우 테스트"""
    # 1. AI 에이전트
    agent = NSRAgent()
    response = agent.ask("겨울에도 가능한가요?")
    assert response["answer"]
    
    # 2. 경제성 계산
    calc = CostCalculator()
    comparison = calc.compare(teu=10)
    assert comparison["savings"]["cost_usd"] > 0
```

---

## 📊 모니터링

### 1. 로그 설정

```python
import logging

# 로그 설정
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# 사용 예시
logger.info("AI 에이전트 초기화 완료")
logger.error("벡터 DB 로드 실패", exc_info=True)
```

### 2. 성능 측정

```python
import time

def measure_time(func):
    """실행 시간 측정 데코레이터"""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        
        logger.info(f"{func.__name__} 실행 시간: {end-start:.2f}초")
        return result
    
    return wrapper

@measure_time
def ask(self, question):
    # ...
    pass
```

---

## ✅ 체크리스트

### 개발 전
- [ ] Python 3.10+ 설치
- [ ] Ollama 설치
- [ ] Git 설치
- [ ] VS Code 설치 (권장)

### 개발 중
- [ ] 가상환경 생성
- [ ] 패키지 설치
- [ ] 지식 베이스 작성 (8개 문서)
- [ ] AI 에이전트 구현
- [ ] 비즈니스 로직 구현
- [ ] UI 구현
- [ ] 테스트 작성

### 배포 전
- [ ] 모든 기능 테스트
- [ ] 성능 측정
- [ ] 문서 업데이트
- [ ] README 작성
- [ ] .gitignore 설정
- [ ] 라이선스 추가

---

**작성자:** 프로젝트 팀  
**최종 수정:** 2025-12-24  
**관련 문서:**
- [PRD.md](./PRD.md)
- [MVP_Architecture.md](./MVP_Architecture.md)
- [Tech_Stack.md](./Tech_Stack.md)

// AI 에이전트 (간단한 키워드 기반 응답)
class NSRAgent {
    constructor() {
        this.knowledgeBase = null;
    }

    async init() {
        try {
            const response = await fetch('data/knowledge.json');
            this.knowledgeBase = await response.json();
        } catch (error) {
            console.error('지식 베이스 로딩 실패:', error);
        }
    }

    extractKeywords(text) {
        if (!text) return [];
        const stopWords = ['은', '는', '이', '가', '을', '를', '에', '의', '무엇', '어떻게', '왜'];
        return text
            .toLowerCase()
            .split(/\s+/)
            .filter(word => !stopWords.includes(word) && word.length > 1);
    }

    searchKnowledge(question) {
        if (!this.knowledgeBase) return [];

        const keywords = this.extractKeywords(question);
        const results = [];

        for (const doc of this.knowledgeBase.documents) {
            let score = 0;
            for (const keyword of keywords) {
                for (const docKeyword of doc.keywords) {
                    if (keyword.includes(docKeyword) || docKeyword.includes(keyword)) {
                        score++;
                    }
                }
            }
            if (score > 0) {
                results.push({ ...doc, score });
            }
        }

        return results.sort((a, b) => b.score - a.score).slice(0, 2);
    }

    async ask(question) {
        const relevantDocs = this.searchKnowledge(question);

        if (relevantDocs.length === 0) {
            return {
                answer: '죄송합니다. 관련 정보를 찾을 수 없습니다. 다른 질문을 해주세요.',
                sources: []
            };
        }

        // 간단한 응답 생성 (실제 AI 대신 지식 베이스 내용 반환)
        let answer = relevantDocs[0].content;

        if (relevantDocs.length > 1) {
            answer += '\n\n' + relevantDocs[1].content;
        }

        return {
            answer: answer,
            sources: relevantDocs.map(doc => ({
                title: doc.title,
                id: doc.id
            }))
        };
    }
}

// 전역 AI 에이전트 인스턴스
const aiAgent = new NSRAgent();

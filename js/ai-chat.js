// AI 채팅 UI 로직
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const question = input.value.trim();

    if (!question) return;

    // 사용자 메시지 추가
    addMessage(question, 'user');
    input.value = '';

    // 로딩 표시
    addMessage('답변을 생성하고 있습니다...', 'bot', true);

    // AI 응답 받기
    const response = await aiAgent.ask(question);

    // 로딩 메시지 제거
    removeLoadingMessage();

    // AI 응답 추가
    addMessage(response.answer, 'bot', false, response.sources);
}

function askQuestion(question) {
    document.getElementById('chatInput').value = question;
    sendMessage();
}

function addMessage(text, sender, isLoading = false, sources = []) {
    const container = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    if (isLoading) messageDiv.id = 'loading-message';

    let sourcesHTML = '';
    if (sources && sources.length > 0) {
        sourcesHTML = '<div class="sources"><strong>참고 자료:</strong> ' +
            sources.map(s => s.title).join(', ') + '</div>';
    }

    messageDiv.innerHTML = `
        <div class="message-content">
            <strong>${sender === 'user' ? '사용자' : 'AI 상담원'}</strong>
            <p>${text}</p>
            ${sourcesHTML}
        </div>
    `;

    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function removeLoadingMessage() {
    const loading = document.getElementById('loading-message');
    if (loading) loading.remove();
}

// 페이지 로드 시 AI 초기화
document.addEventListener('DOMContentLoaded', async function () {
    await aiAgent.init();
    console.log('AI 에이전트 준비 완료');
});

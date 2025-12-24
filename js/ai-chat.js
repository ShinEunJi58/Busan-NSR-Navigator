// AI 채팅 UI 로직
async function sendMessage() {
    const input = document.getElementById('chat-input');
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
    document.getElementById('chat-input').value = question;
    sendMessage();
}

function addMessage(text, sender, isLoading = false, sources = []) {
    const container = document.getElementById('chat-container');
    const messageDiv = document.createElement('div');

    // Tailwind classes for chat bubbles
    const isUser = sender === 'user';
    messageDiv.className = `flex gap-3 mb-4 ${isUser ? 'flex-row-reverse' : ''}`;

    if (isLoading) messageDiv.id = 'loading-message';

    let sourcesHTML = '';
    if (sources && sources.length > 0) {
        sourcesHTML = `<div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500">
            <strong>참고 자료:</strong> ${sources.map(s => s.title).join(', ')}
        </div>`;
    }

    // Avatar
    const avatar = isUser
        ? `<div class="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-sm text-slate-500">person</span></div>`
        : `<div class="size-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0"><span class="material-symbols-outlined text-sm">smart_toy</span></div>`;

    // Bubble Style
    const bubbleStyle = isUser
        ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
        : "bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200";

    messageDiv.innerHTML = `
        ${avatar}
        <div class="${bubbleStyle} p-3 rounded-2xl ${isUser ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm max-w-[85%] text-sm leading-relaxed">
            <p>${text}</p>
            ${sourcesHTML}
        </div>
    `;

    container.appendChild(messageDiv);
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
}

function removeLoadingMessage() {
    const loading = document.getElementById('loading-message');
    if (loading) loading.remove();
}

// Enter 키로 전송 확인
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 페이지 로드 시 AI 초기화
document.addEventListener('DOMContentLoaded', async function () {
    await aiAgent.init();
    console.log('AI 에이전트 준비 완료');
});

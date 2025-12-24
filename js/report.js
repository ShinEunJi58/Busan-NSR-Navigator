// 보고서 페이지 로직
document.addEventListener('DOMContentLoaded', function () {
    // localStorage에서 데이터 가져오기 (input.html에서 저장한 키: simulationData)
    const data = JSON.parse(localStorage.getItem('simulationData') || '{"teu": 10, "season": "summer"}');

    // 1. 메타 데이터 업데이트
    const today = new Date().toLocaleDateString();
    const dateEl = document.getElementById('report-date');
    if (dateEl) dateEl.textContent = today;

    // 2. 계산 실행
    const teu = parseInt(data.teu) || 10;
    const season = data.season || 'summer';
    const result = calculator.calculate(teu, season);

    // 3. 점수 계산 (단순화된 로직)
    // 여름이면 +10점, 비용절감율 * 2
    const costSavingPercent = ((result.savings.cost / result.suez.cost) * 100);
    let score = Math.min(99, Math.floor(60 + (season === 'summer' ? 10 : 0) + (costSavingPercent / 2)));
    const scoreEl = document.getElementById('report-score');
    if (scoreEl) scoreEl.textContent = score + '점';

    // 4. 총 거리 업데이트
    const distEl = document.getElementById('report-total-dist');
    if (distEl) distEl.textContent = `총 거리: ${result.nsr.distance.toLocaleString()} km`;

    // 5. 핵심 요약 업데이트
    const summaryElement = document.getElementById('ai-summary-text');
    const distSavingPercent = ((result.savings.distance / result.suez.distance) * 100).toFixed(0);
    if (summaryElement) summaryElement.innerHTML = `이번 북극항로(NSR) 경로는 기존 수에즈 운하 경로 대비 <span class="text-primary font-bold">거리 ${distSavingPercent}% 단축</span> 효과가 있습니다.`;

    // 6. 리스트 항목 업데이트
    const costSaveEl = document.getElementById('report-cost-save');
    if (costSaveEl) costSaveEl.textContent = `$${result.savings.cost.toLocaleString()} (${costSavingPercent.toFixed(0)}%)`;

    const timeSavingPercent = ((result.savings.days / result.suez.days) * 100).toFixed(0);
    const timeSaveEl = document.getElementById('report-time-save');
    if (timeSaveEl) timeSaveEl.textContent = `${result.savings.days}일 (${timeSavingPercent}%)`;

    const co2SaveEl = document.getElementById('report-co2-save');
    if (co2SaveEl) co2SaveEl.textContent = `-${result.savings.co2.toLocaleString()} ton`;

    // 7. 상세 분석 - 비용
    const detailCostTotal = document.getElementById('detail-cost-total');
    if (detailCostTotal) detailCostTotal.textContent = `$${result.nsr.cost.toLocaleString()}`;

    const detailCostSuez = document.getElementById('detail-cost-suez');
    if (detailCostSuez) detailCostSuez.textContent = `$${result.suez.cost.toLocaleString()}`;

    // 8. AI 추천 리스트 구성
    const recList = document.getElementById('ai-recommendations-list');
    if (recList) {
        recList.innerHTML = ''; // 초기화

        let recommendations = [];
        if (season === 'summer') {
            recommendations.push(`• ☀️ <strong>여름철 최적기:</strong> 해빙 감소로 쇄빙선 의존도가 낮아 비용 효율이 극대화됩니다.`);
        } else {
            recommendations.push(`• ❄️ <strong>겨울철 주의:</strong> 쇄빙선 비용이 발생하나, 긴급 화물 운송에는 여전히 유리합니다.`);
        }

        if (data.cargo === 'LNG' || data.cargo === 'electronic') {
            recommendations.push(`• ⚡ <strong>시간 민감 화물:</strong> ${data.cargo} 운송 시 재고 비용 절감 효과가 탁월합니다.`);
        }

        recommendations.push(`• 📉 탄소 배출량 ${result.savings.co2}톤 감축으로 ESG 경영 목표 달성에 기여합니다.`);

        recommendations.forEach(rec => {
            const p = document.createElement('p');
            p.className = 'mb-1';
            p.innerHTML = rec;
            recList.appendChild(p);
        });
    }
});

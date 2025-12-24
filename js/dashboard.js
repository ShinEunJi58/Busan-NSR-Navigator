// 대시보드 전용 JavaScript
function quickCalculate() {
    const teuInput = document.getElementById('quick-teu');
    const seasonInput = document.getElementById('quick-season');

    if (!teuInput || !seasonInput) return;

    const teu = parseInt(teuInput.value) || 10;
    const season = seasonInput.value;

    const result = calculator.calculate(teu, season);

    // 카드 업데이트
    const dashSaveCost = document.getElementById('dash-save-cost');
    const dashSaveCostPercent = document.getElementById('dash-save-cost-percent');
    const dashSaveCo2 = document.getElementById('dash-save-co2');
    const dashSaveDays = document.getElementById('dash-save-days');
    const dashSaveDistance = document.getElementById('dash-save-distance');
    const aiRecText = document.getElementById('ai-rec-text');

    if (dashSaveCost) dashSaveCost.textContent = '$' + result.savings.cost.toLocaleString();

    if (dashSaveCostPercent) {
        const percent = ((result.savings.cost / result.suez.cost) * 100).toFixed(1);
        dashSaveCostPercent.textContent = `+${percent}%`;
    }

    if (dashSaveCo2) dashSaveCo2.textContent = result.savings.co2.toLocaleString() + 't';
    if (dashSaveDays) dashSaveDays.textContent = result.savings.days + ' Days';
    if (dashSaveDistance) dashSaveDistance.textContent = result.savings.distance.toLocaleString() + ' km';

    if (aiRecText) {
        const percent = ((result.savings.cost / result.suez.cost) * 100).toFixed(1);
        aiRecText.textContent = `현재 조건(${teu} TEU, ${season === 'summer' ? '여름' : '겨울'})에서 북극항로 이용 시 약 ${percent}%의 비용 절감이 예상됩니다. ${season === 'summer' ? '여름철 운항은 리스크가 낮아 적극 권장됩니다.' : '겨울철 운항은 쇄빙선 비용이 발생하지만 여전히 시간 단축 효과가 큽니다.'}`;
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    // 초기 계산 실행
    if (window.calculator) {
        quickCalculate();
    }
});

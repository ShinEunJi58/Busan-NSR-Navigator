// 대시보드 전용 JavaScript
function quickCalculate() {
    const teu = parseInt(document.getElementById('quick-teu').value);
    const season = document.getElementById('quick-season').value;

    if (!teu || teu < 1) {
        alert('유효한 TEU 값을 입력하세요!');
        return;
    }

    const result = calculator.calculate(teu, season);

    // 카드 업데이트
    document.getElementById('dash-suez-distance').textContent = result.suez.distance.toLocaleString() + ' km';
    document.getElementById('dash-suez-days').textContent = result.suez.days + ' 일';
    document.getElementById('dash-suez-cost').textContent = '$' + result.suez.cost.toLocaleString();
    document.getElementById('dash-suez-co2').textContent = result.suez.co2.toLocaleString() + ' ton';

    document.getElementById('dash-nsr-distance').textContent = result.nsr.distance.toLocaleString() + ' km';
    document.getElementById('dash-nsr-days').textContent = result.nsr.days + ' 일';
    document.getElementById('dash-nsr-cost').textContent = '$' + result.nsr.cost.toLocaleString();
    document.getElementById('dash-nsr-co2').textContent = result.nsr.co2.toLocaleString() + ' ton';

    document.getElementById('dash-save-distance').textContent = result.savings.distance.toLocaleString() + ' km';
    document.getElementById('dash-save-days').textContent = result.savings.days + ' 일';
    document.getElementById('dash-save-cost').textContent = '$' + result.savings.cost.toLocaleString();
    document.getElementById('dash-save-co2').textContent = result.savings.co2.toLocaleString() + ' ton';

    // AI 추천 업데이트
    const savingsPercent = ((result.savings.cost / result.suez.cost) * 100).toFixed(1);
    document.getElementById('ai-rec-text').textContent =
        `현재 조건에서 북극항로 이용 시 약 ${savingsPercent}%의 비용 절감이 예상됩니다. ${season === 'summer' ? '여름철' : '겨울철'} 운항입니다.`;

    // 차트 업데이트
    updateDashboardCharts(result);
}

// 대시보드 차트 초기화
let dashCostChart, dashTimeChart, dashCO2Chart;

function initDashboardCharts() {
    const costCtx = document.getElementById('dashCostChart').getContext('2d');
    const timeCtx = document.getElementById('dashTimeChart').getContext('2d');
    const co2Ctx = document.getElementById('dashCO2Chart').getContext('2d');

    dashCostChart = new Chart(costCtx, {
        type: 'bar',
        data: {
            labels: ['수에즈', 'NSR'],
            datasets: [{
                label: '비용 (USD)',
                data: [18000, 13000],
                backgroundColor: ['rgba(255, 152, 0, 0.7)', 'rgba(30, 136, 229, 0.7)']
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: '비용 비교' } }
        }
    });

    dashTimeChart = new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: ['수에즈', 'NSR'],
            datasets: [{
                label: '시간 (일)',
                data: [40, 25],
                backgroundColor: ['rgba(255, 152, 0, 0.7)', 'rgba(76, 175, 80, 0.7)']
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: '시간 비교' } }
        }
    });

    dashCO2Chart = new Chart(co2Ctx, {
        type: 'bar',
        data: {
            labels: ['수에즈', 'NSR'],
            datasets: [{
                label: 'CO₂ (ton)',
                data: [3150, 1905],
                backgroundColor: ['rgba(244, 67, 54, 0.7)', 'rgba(76, 175, 80, 0.7)']
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: 'CO₂ 배출량 비교' } }
        }
    });
}

function updateDashboardCharts(result) {
    if (dashCostChart) {
        dashCostChart.data.datasets[0].data = [result.suez.cost, result.nsr.cost];
        dashCostChart.update();
    }
    if (dashTimeChart) {
        dashTimeChart.data.datasets[0].data = [result.suez.days, result.nsr.days];
        dashTimeChart.update();
    }
    if (dashCO2Chart) {
        dashCO2Chart.data.datasets[0].data = [result.suez.co2, result.nsr.co2];
        dashCO2Chart.update();
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    initDashboardCharts();
    quickCalculate();
});

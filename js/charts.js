// Chart.js 차트 인스턴스
let costChart = null;
let timeChart = null;

// 차트 초기화
function initCharts() {
    const costCtx = document.getElementById('costChart').getContext('2d');
    const timeCtx = document.getElementById('timeChart').getContext('2d');

    costChart = new Chart(costCtx, {
        type: 'bar',
        data: {
            labels: ['수에즈', 'NSR'],
            datasets: [{
                label: '비용 (USD)',
                data: [18000, 13000],
                backgroundColor: [
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(30, 136, 229, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 152, 0, 1)',
                    'rgba(30, 136, 229, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '비용 비교',
                    font: { size: 18 }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'USD'
                    }
                }
            }
        }
    });

    timeChart = new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: ['수에즈', 'NSR'],
            datasets: [{
                label: '시간 (일)',
                data: [40, 25],
                backgroundColor: [
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(76, 175, 80, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 152, 0, 1)',
                    'rgba(76, 175, 80, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '시간 비교',
                    font: { size: 18 }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '일'
                    }
                }
            }
        }
    });
}

// 차트 업데이트
function updateCharts(result) {
    if (costChart) {
        costChart.data.datasets[0].data = [result.suez.cost, result.nsr.cost];
        costChart.update();
    }

    if (timeChart) {
        timeChart.data.datasets[0].data = [result.suez.days, result.nsr.days];
        timeChart.update();
    }
}

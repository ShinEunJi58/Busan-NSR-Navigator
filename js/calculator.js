// 경제성 계산기
class Calculator {
    constructor() {
        this.routes = {
            suez: {
                distance: 21000,
                days: 40,
                baseCost: 8000,
                costPerTEU: 1000
            },
            nsr: {
                summer: {
                    distance: 12700,
                    days: 25,
                    baseCost: 8000,
                    costPerTEU: 500
                },
                winter: {
                    distance: 12700,
                    days: 25,
                    baseCost: 8000,
                    costPerTEU: 600 // 20% 할증
                }
            }
        };
    }

    calculate(teu, season) {
        const suez = this.routes.suez;
        const nsr = this.routes.nsr[season];

        const suezCost = suez.baseCost + (suez.costPerTEU * teu);
        const nsrCost = nsr.baseCost + (nsr.costPerTEU * teu);

        const suezCO2 = this.calculateCO2(suez.distance, teu);
        const nsrCO2 = this.calculateCO2(nsr.distance, teu);

        return {
            suez: {
                distance: suez.distance,
                days: suez.days,
                cost: suezCost,
                co2: suezCO2
            },
            nsr: {
                distance: nsr.distance,
                days: nsr.days,
                cost: nsrCost,
                co2: nsrCO2
            },
            savings: {
                distance: suez.distance - nsr.distance,
                days: suez.days - nsr.days,
                cost: suezCost - nsrCost,
                co2: suezCO2 - nsrCO2
            }
        };
    }

    calculateCO2(distance, teu) {
        const co2PerKm = 0.015; // kg CO2 per km per TEU
        return Math.round(distance * co2PerKm * teu);
    }
}

// 전역 Calculator 인스턴스
const calculator = new Calculator();

// 계산 함수
function calculate() {
    const teu = parseInt(document.getElementById('teu').value);
    const season = document.getElementById('season').value;

    if (!teu || teu < 1) {
        alert('유효한 TEU 값을 입력하세요!');
        return;
    }

    const result = calculator.calculate(teu, season);

    // 수에즈 결과 업데이트
    document.getElementById('suez-distance').textContent = result.suez.distance.toLocaleString();
    document.getElementById('suez-days').textContent = result.suez.days;
    document.getElementById('suez-cost').textContent = result.suez.cost.toLocaleString();
    document.getElementById('suez-co2').textContent = result.suez.co2.toLocaleString();

    // NSR 결과 업데이트
    document.getElementById('nsr-distance').textContent = result.nsr.distance.toLocaleString();
    document.getElementById('nsr-days').textContent = result.nsr.days;
    document.getElementById('nsr-cost').textContent = result.nsr.cost.toLocaleString();
    document.getElementById('nsr-co2').textContent = result.nsr.co2.toLocaleString();

    // 절감액 업데이트
    document.getElementById('save-distance').textContent = result.savings.distance.toLocaleString();
    document.getElementById('save-days').textContent = result.savings.days;
    document.getElementById('save-cost').textContent = result.savings.cost.toLocaleString();
    document.getElementById('save-co2').textContent = result.savings.co2.toLocaleString();

    // 차트 업데이트
    updateCharts(result);
}

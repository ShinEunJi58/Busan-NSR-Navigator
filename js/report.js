// 보고서 페이지 로직
document.addEventListener('DOMContentLoaded', function () {
    // localStorage에서 데이터 가져오기
    const data = JSON.parse(localStorage.getItem('analysisData') || '{}');

    // 기본 정보 표시
    document.getElementById('report-company').textContent = data.company || '미입력';
    document.getElementById('report-cargo').textContent = getCargoTypeName(data.cargoType);
    document.getElementById('report-origin').textContent = getLocationName(data.origin);
    document.getElementById('report-dest').textContent = getLocationName(data.destination);
    document.getElementById('report-teu').textContent = data.teu || '10';
    document.getElementById('report-season').textContent = data.season === 'summer' ? '여름' : '겨울';

    // 경제성 계산
    const teu = parseInt(data.teu) || 10;
    const season = data.season || 'summer';
    const result = calculator.calculate(teu, season);

    // 결과 표시
    document.getElementById('report-suez-cost').textContent = '$' + result.suez.cost.toLocaleString();
    document.getElementById('report-suez-days').textContent = result.suez.days + '일';
    document.getElementById('report-nsr-cost').textContent = '$' + result.nsr.cost.toLocaleString();
    document.getElementById('report-nsr-days').textContent = result.nsr.days + '일';

    const costSavingPercent = ((result.savings.cost / result.suez.cost) * 100).toFixed(1);
    const timeSavingPercent = ((result.savings.days / result.suez.days) * 100).toFixed(1);

    document.getElementById('report-save-cost').textContent =
        `$${result.savings.cost.toLocaleString()} (${costSavingPercent}%)`;
    document.getElementById('report-save-days').textContent =
        `${result.savings.days}일 (${timeSavingPercent}%)`;

    // 리스크 평가
    const safetyLevel = season === 'summer' ? '안전' : '주의';
    const recommendLevel = costSavingPercent > 20 ? '적극 권장' : '권장';

    document.getElementById('safety-level').textContent = safetyLevel;
    document.getElementById('recommend-level').textContent = recommendLevel;

    // 최종 추천
    const recommendation = `
        현재 입력하신 조건에서 <strong>북극항로 활용을 ${recommendLevel}</strong>합니다. 
        수에즈 항로 대비 약 ${costSavingPercent}%의 비용 절감과 ${timeSavingPercent}%의 시간 단축 효과가 예상됩니다. 
        ${season === 'summer' ? '여름철 운항 시 리스크가 낮아 안전한 운송이 가능합니다.' : '겨울철 운항은 쇄빙선 지원이 필요하며 기상 리스크를 고려해야 합니다.'}
    `;
    document.getElementById('final-recommendation').innerHTML = recommendation;
});

function getCargoTypeName(type) {
    const types = {
        'container': '컨테이너',
        'bulk': '벌크',
        'lng': 'LNG',
        'other': '기타'
    };
    return types[type] || '컨테이너';
}

function getLocationName(code) {
    const locations = {
        'busan': '부산',
        'shanghai': '상하이',
        'singapore': '싱가포르',
        'rotterdam': '로테르담',
        'hamburg': '함부르크',
        'london': '런던'
    };
    return locations[code] || code;
}

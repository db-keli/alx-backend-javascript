function calculateNumber(type, a, b) {
    const aVal = Math.round(a);
    const bVal = Math.round(b);
    let answer = 0;
    switch (type) {
        case 'SUM':
            answer = aVal + bVal;
            break;
        case 'SUBTRACT':
            answer = aVal - bVal;
            break;
        case 'DIVIDE':
            if (bVal === 0) {
                answer = "Error";
            } else {
                answer = aVal / bVal;
            }
            break;
    }
    return answer;
}

module.exports = calculateNumber;

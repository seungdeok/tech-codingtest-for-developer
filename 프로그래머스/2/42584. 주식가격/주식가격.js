function solution(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let cur = 0;
        for (let j = i + 1; j < prices.length; j++) {
            cur++;
            if (prices[j] < prices[i]) {
                break;
            }
        }
        
        answer.push(cur);
    }
    
    return answer;
}
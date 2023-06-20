function solution(n, times) {
    times.sort((a, b) => a - b);
    const max = 1000000000 * n;
    
    let start = 1;
    let end = max;
    let answer = max;
    
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        let cnt = 0;
        times.forEach((value) => {
            cnt += parseInt((mid / value));
            
            if (cnt >= n) {
                answer = Math.min(answer, mid);
                return;
            }
        });
        
        if (cnt >= n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return answer;
}
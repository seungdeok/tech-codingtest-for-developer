function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let answer = 0;
    let camera = -30001; // 최소값이 -30000
    
    for (const [s, e] of routes) {
        if (camera < s) {
            answer++;
            camera = e;
        }
    }
    
    return answer;
}
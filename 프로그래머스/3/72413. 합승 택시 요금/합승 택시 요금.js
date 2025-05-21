function solution(n, s, a, b, fares) {
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    
    for (const [c, d, f] of fares) {
        dist[c- 1][d - 1] = f;
        dist[d- 1][c - 1] = f;
    }
    
    for (let i = 0 ;i < n; i ++) {
        dist[i][i] = 0;
    }
    
    for (let j = 0; j < n; j++) { // 경유
        for (let i = 0; i < n; i++) { // 출발
            for (let k = 0; k < n; k++) { // 도착
                if (dist[i][j] !== Infinity && dist[j][k] !== Infinity) {
                    dist[i][k] = Math.min(dist[i][k], dist[i][j] + dist[j][k]);
                }
            }
        }
    }
    
    let answer = Infinity;
    for (let i = 0 ; i < n; i++) {
        answer = Math.min(answer, dist[s - 1][i] + dist[i][a - 1] + dist[i][b - 1]);
    }
    
    return answer;
}
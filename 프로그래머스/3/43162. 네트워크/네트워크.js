function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    function BFS(v) {
        const queue = [v];
        
        while (queue.length) {
            const cur = queue.shift();
            
            for (let next = 0; next < n; next++) {
                if (!visited[next] && computers[cur][next] === 1) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            BFS(i);
            answer++;
        }
    }
    
    return answer;
}
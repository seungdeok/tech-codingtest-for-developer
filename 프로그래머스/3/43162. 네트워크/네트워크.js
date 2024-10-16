function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);
    
    function BFS(v) {
        const queue = [v];
        
        while (queue.length) {
            const cur = queue.shift();
            
            for (let i = 0 ; i < computers[cur].length; i++) {
                if (!visited[i] && computers[cur][i] === 1) {
                    visited[i] = true;
                    queue.push(i);
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
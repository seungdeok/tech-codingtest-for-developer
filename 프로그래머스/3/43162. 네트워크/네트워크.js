function solution(n, computers) {    
    let answer = 0;
    const visited = Array(n).fill(false);
    
    function dfs(start) {
        visited[start] = true;
        
        for (let i = 0; i < n; i++) {
            if (!visited[i] && computers[start][i] === 1) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}
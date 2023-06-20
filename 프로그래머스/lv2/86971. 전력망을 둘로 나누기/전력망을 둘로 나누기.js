function solution(n, wires) {
    const list = Array.from({length: n + 1}, () => []);
    for (const [src, dest] of wires) {
        list[src].push(dest);
        list[dest].push(src);
    }
    
    console.log(list);
    
    function bfs(start, exception) {
        const queue = [start];
        const visited = Array.from({length: n + 1}, () => false);
        visited[start] = true;
        let cnt = 0;
        
        while(queue.length) {
            const cur = queue.shift();
            for (const next of list[cur]) {
                if (next !== exception && !visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
            
            cnt++;
        }
              
        return cnt;
    }
    
    let answer = 100;
    for (const [src, dest] of wires) {
        answer = Math.min(answer, Math.abs(bfs(src, dest) - bfs(dest, src)));   
    }
    
    return answer;
}
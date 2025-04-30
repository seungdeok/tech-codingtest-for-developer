function solution(n, vertex) {
    const graph = Array(n + 1).fill().map(() => []);
    
    for (const [src, dest] of vertex) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
    
    const queue = [1];
    const visited = Array(n + 1).fill(0);
    visited[1] = 1;
    
    while (queue.length) {
        const cur = queue.shift();
        
        for (const next of graph[cur]) {
            if (visited[next] === 0) {
                queue.push(next);
                visited[next] = visited[cur] + 1;
            }
        }
    }
    
    const max = Math.max(...visited);
    
    return visited.filter((v) => v === max).length;
}
function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    
    for (const [src, dest] of edge) {
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
    
    const count = visited.filter((v) => v === max);
    
    return count.length;
}
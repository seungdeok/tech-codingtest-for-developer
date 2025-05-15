

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const [startR, startC] = [0, 0];
    const [targetR, targetC] = [n - 1, m - 1];
    
    const dr = [1, 0, -1, 0]; // t, r, b, l
    const dc = [0, 1, 0, -1];
        
    const queue = [[startR, startC, 1]];
    
    while (queue.length) {
        const [r, c, move] = queue.shift();
        
        if (r === targetR && c === targetC) {
            return move;
        }
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if (nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc] === 1) {
                maps[nr][nc] = 0;
                queue.push([nr, nc, move + 1]);
            }
        }   
    }
    
    return -1;
}
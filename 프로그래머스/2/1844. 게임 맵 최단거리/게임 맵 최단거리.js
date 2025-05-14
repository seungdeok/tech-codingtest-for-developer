

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dRow = [1, 0, -1, 0];
    const dCol = [0, 1, 0, -1]; // t, r, b, l
    
    const queue = [[0, 0, 1]];
    
    while (queue.length) {
        const [row, col, move] = queue.shift();
        
        if (row === n - 1 && col === m - 1) {
            return move;
        }
        
        for (let i = 0; i < 4; i++) {
            const nRow = row + dRow[i];
            const nCol = col + dCol[i];
            if (nRow >= 0 && nRow < n && nCol >= 0 && nCol < m && maps[nRow][nCol] === 1) {
                queue.push([nRow, nCol, move + 1]);
                maps[nRow][nCol] = 0;
            }
        }
    }
    
    return -1;
}
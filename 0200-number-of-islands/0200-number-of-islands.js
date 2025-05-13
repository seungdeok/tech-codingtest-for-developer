/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    
    // top, right, bottom, left
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    function dfs(x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || grid[x][y] === "0") return;

        visited[x][y] = true;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            dfs(nx, ny);
        } 
    }

    let answer = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) {
                dfs(i, j);
                answer++;
            }
        }
    }

    return answer;
};
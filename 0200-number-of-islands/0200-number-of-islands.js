/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 1 = land, 0 = water
    
    const m = grid.length;
    const n = grid[0].length;

    const dr = [1, 0, -1, 0];
    const dc = [0, 1, 0, -1];

    function dfs(r, c) {
        grid[r][c] = '0';

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === '1') {
                dfs(nr, nc);
            }
        }
    }

    
    let answer = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                answer++;
            }
        }
    }

    return answer;
};
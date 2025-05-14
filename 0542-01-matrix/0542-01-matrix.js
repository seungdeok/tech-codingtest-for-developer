/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const dx = [0, 1, 0, -1]; // t, r, b, l
    const dy = [1, 0, -1, 0];
    
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) queue.push([i, j, 0]);
            else mat[i][j] = -1;
        }
    }

    while (queue.length) {
        const [curX, curY, dis] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && mat[nx][ny] === -1) {
                mat[nx][ny] = dis + 1;
                queue.push([nx, ny, dis + 1]);
            }
        }
    }

    return mat;
};
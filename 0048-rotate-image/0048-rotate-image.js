/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    const answer = [];
    for (let i = 0; i < n; i++) {
        const item = [];
        for (let j = n - 1; j >= 0; j--) {
            item.push(matrix[j][i]);
        }
        answer[i] = item;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = answer[i][j];
        }
    }
};
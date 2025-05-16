/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    const size = matrix.length * matrix[0].length;
    const answer = [];

    while (answer.length < size) {
        for (let i = left; i <= right && answer.length < size; i++) {
            answer.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && answer.length < size; i++) {
            answer.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left && answer.length < size; i--) {
            answer.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top && answer.length < size; i--) {
            answer.push(matrix[i][left]);
        }
        left++;
    }
    return answer;
};
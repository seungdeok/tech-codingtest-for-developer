/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let answer = [];
    const nums = Array.from({ length: n }, (_, i) => i + 1);

    function dfs(level, start, result) {
        if (level === k) {
            answer.push(result);
            return;
        }
    
        for (let i = start; i < n; i++) {
            dfs(level + 1, i + 1, result.concat([nums[i]]));
        }
    }

    dfs(0, 0, []);

    return answer;
};
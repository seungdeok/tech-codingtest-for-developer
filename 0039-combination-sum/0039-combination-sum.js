/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = [];
    
    function backtrack(curr, start, sum) {
        if (sum === target) {
            answer.push([...curr]);
            return;
        }
        if (sum > target) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            curr.push(candidates[i]);
            // 같은 숫자를 여러 번 사용
            backtrack(curr, i, sum + candidates[i]);
            curr.pop();
        }
    }
    
    backtrack([], 0, 0);
    return answer;
};
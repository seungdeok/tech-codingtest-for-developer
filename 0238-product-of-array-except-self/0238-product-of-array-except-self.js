/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = new Array(nums.length);
    
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    console.log(answer);
    
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }
    
    return answer;
};
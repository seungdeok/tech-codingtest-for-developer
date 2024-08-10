/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = new Array(nums.length).fill(1);
    
    let leftProduct = 1;
    // left
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    // right
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};
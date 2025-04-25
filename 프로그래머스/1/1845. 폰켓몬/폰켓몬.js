function solution(nums) {
    const max = Math.floor(nums.length / 2);
    const uniqueNums = [...new Set(nums)];
    
    return Math.min(uniqueNums.length, max);
}
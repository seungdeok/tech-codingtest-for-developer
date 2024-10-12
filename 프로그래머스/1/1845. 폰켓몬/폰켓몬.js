function solution(nums) {
    const max = Math.floor(nums.length / 2);
    const arr = [...new Set(nums)];
    
    return arr.length > max ? max : arr.length;
}
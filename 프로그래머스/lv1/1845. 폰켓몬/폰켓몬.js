function solution(nums) {
    const picks = Math.floor(nums.length / 2);
    const list = new Set([...nums]);
    
    if (list.size < picks) return list.size;
    return picks;
}
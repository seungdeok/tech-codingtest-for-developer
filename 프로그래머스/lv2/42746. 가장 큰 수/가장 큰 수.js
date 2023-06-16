function solution(numbers) {
    const arr = numbers.map((nums) => nums.toString()).sort((a, b) => (b+a)-(a+b));
    
    return arr[0] === "0" ? "0" : arr.join("");
}
function solution(numbers) {
    if (numbers.length === numbers.filter((item) => item === 0).length) return "0";
    
    numbers.sort((a, b) => {
        const str1 = String(a) + String(b);
        const str2 = String(b) + String(a);
        
        return str2 - str1;
    });
    
    return numbers.join("");
}
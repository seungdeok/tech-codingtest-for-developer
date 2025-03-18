function solution(N, number) {
    if (N === number) return 1;
    
    const numberArr = [new Set()];
    for (let i = 1; i < 9; i++) {
        numberArr.push(new Set([Number(String(N).repeat(i))]));
    }
    
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < i; j++) {
            for (const num1 of numberArr[j]) {
                for (const num2 of numberArr[i - j]) {
                    numberArr[i].add(num1 + num2);
                    numberArr[i].add(num1 - num2);    
                    numberArr[i].add(num1 * num2);    
                    numberArr[i].add(num1 / num2);
                }
            }
        }
        if (numberArr[i].has(number)) return i;
    }
    
    return -1;
}
function solution(sizes) {
    let max = 0;
    let min = 0;
    
    for (const arr of sizes) {
        const arrMax = Math.max(...arr);
        const arrMin = Math.min(...arr);
        if (arrMax > max) {
            max = arrMax;    
        }
        if (arrMin > min) {
            min = arrMin;    
        }
    }
    return max * min;
}
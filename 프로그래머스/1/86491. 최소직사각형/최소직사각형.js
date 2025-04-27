function solution(sizes) {
    let max = 0;
    let min = 0;
    
    for (const size of sizes) {
        const sizeMax = Math.max(...size);
        const sizeMin = Math.min(...size);
        
        if (sizeMax > max) max = sizeMax;
        if (sizeMin > min) min = sizeMin;
    }
    
    return max * min;
}
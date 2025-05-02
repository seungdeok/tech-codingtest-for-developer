function solution(n, works) {
    while (n > 0) {
        const max = Math.max(...works);
        
        if (max === 0) break;
        
        for (let i = 0; i < works.length; i++) {
            if (works[i] === max) {
                works[i] -= 1;
                n--;
                
                if (n === 0) {
                    break;
                }
            }
        }
    }
    
    let answer = 0;
    
    console.log(works);
    for (const work of works) {
        answer += work ** 2;
    }
    
    return answer;
}
function permutations(list, n) {
    if (list.length === 1) return list.map((v) => [v]);
    
    const result = [];
    
    list.forEach((fixed, idx, arr) => {
        const rest = arr.filter((_, index) => index !== idx);
        const combis = permutations(rest, n - 1);
        const combine = combis.map((v) => [fixed, ...v]);
        
        result.push(...combine);
    });
    
    return result;
}

function solution(k, dungeons) {
    let answer = -1;
    
    const result = permutations(dungeons);
    
    console.log(result);
    
    for (const dungeon of result) {
        let cnt = 0;
        let point = k;
        
        for (const [min, use] of dungeon) {
            if (point >= min) {
                point -= use;
                cnt++;
            }
        }
        
        answer = Math.max(answer, cnt);
    }
    
    return answer;
}
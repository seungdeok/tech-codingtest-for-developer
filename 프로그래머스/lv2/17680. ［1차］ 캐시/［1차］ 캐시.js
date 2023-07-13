function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    
    for (const item of cities) {
        const city = item.toUpperCase();
        if (cacheSize === 0) {
            answer += 5;
        } else if (cache.indexOf(city) === -1) {
            answer += 5;
            if (cache.length < cacheSize) {
                cache.push(city);
            } else if (cache.length === cacheSize) {
                cache.shift();
                cache.push(city);
            }
        } else {
            answer += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
            if (cache.length === cacheSize) {
                
            }
        }
    }
    
    return answer;
}


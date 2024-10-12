function solution(clothes) {
    const map = new Map();
    let answer = 1;
    
    for (let [name, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    for (let [key, value] of map.entries()) {
        answer *= (value + 1);
    }
    
    return answer - 1;
}
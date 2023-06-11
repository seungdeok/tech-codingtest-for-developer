function solution(clothes) {

    const map = new Map();
    
    for (let i = 0; i < clothes.length; i++) {
        let [name, type] = clothes[i];
        
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    console.log(map)
    
    let answer = 1;
    for (let [key, value] of map) {
        answer *= (value + 1);
    }
    
    return answer - 1;
}
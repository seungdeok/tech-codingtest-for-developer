function solution(clothes) {
    const map = new Map();
    
    for (const [clothName, clothType] of clothes) {
        map.set(clothType, (map.get(clothType) | 0) + 1);
    }
    
    let sum = 1;
    
    for (const [clothName, count] of map) {
        sum *= (count + 1);   
    }
    
    return sum - 1;
}
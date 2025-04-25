function solution(participant, completion) {
    const map = new Map();
    
    for (const person of participant) {
        map.set(person, (map.get(person) || 0) + 1);
    }
    
    for (const person of completion) {
        if (map.get(person) === 1) map.delete(person);
        else map.set(person, map.get(person) - 1);
    }
    
    for (const key of map.keys()) {
        return key;
    }
}
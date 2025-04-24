function count(target) {
    if (target === "A") {
        return 0;
    } else if (target === "Z") {
        return 1;
    }
    
    return Math.min("Z".charCodeAt(0) - target.charCodeAt(0) + 1, target.charCodeAt(0) - "A".charCodeAt(0));
}

function solution(name) {
    let answer = 0;
    for (let i = 0; i < name.length; i++) {
        answer += count(name[i]);
    }
    
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        let nextIndex = i + 1;
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        
        const move = i + i + name.length - nextIndex;
        minMove = Math.min(minMove, move);
        
        const reverseMove = (name.length - nextIndex) * 2 + i;
        minMove = Math.min(minMove, reverseMove);
    }
    
    minMove = Math.max(0, minMove);
    answer += minMove;
    
    return answer;
}
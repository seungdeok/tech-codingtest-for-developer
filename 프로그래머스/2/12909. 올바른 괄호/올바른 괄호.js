function solution(s) {
    if (s[0] === ')' || s.length === 1) return false;
    
    let answer = 0;
    for (let str of s.split("")) {
        if (str === '(') answer++;
        else if (str === ')') answer--;
        if (answer < 0) return false;
    }
    
    return answer === 0;
}

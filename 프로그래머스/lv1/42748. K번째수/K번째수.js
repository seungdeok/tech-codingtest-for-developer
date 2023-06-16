function solution(array, commands) {
    const answer = [];
    
    for (const [i, j, k] of commands) {
            const list = array.slice(i - 1, j).sort((a, b) => a - b);
            
            answer.push(list[k - 1]);
    }

    return answer;
}
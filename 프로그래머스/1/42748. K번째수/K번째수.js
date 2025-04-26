function solution(array, commands) {
    const answer = [];
    for (const command of commands) {
        const [start, end, K] = command;
        
        const subArray = array.slice(start - 1, end).sort((a, b) => a - b);
        
        answer.push(subArray[K - 1]);
    }
    
    return answer;
}
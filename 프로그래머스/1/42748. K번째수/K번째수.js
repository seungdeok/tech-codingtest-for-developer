function solution(array, commands) {
    const answer = [];
    
    for (const [i, j, k] of commands) {
        const arr = array.slice(i - 1 , j).sort((a, b) => a - b);
        answer.push(arr[k - 1]);
    }
    
    return answer;
}
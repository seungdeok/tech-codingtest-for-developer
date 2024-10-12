function solution(operations) {
    const answer = [];
    
    for (const operation of operations) {
        const [command, value] = operation.split(" ");
        const num = Number(value);
        
        if (command === "I") {
            answer.push(num);
            answer.sort((a, b) => a - b);
        } else if (command === "D" && num === -1) {
            answer.shift();
        } else if (command === "D" && num === 1) {
            answer.pop();
        } 
    }
    
    return answer.length === 0 ? [0,0] : [answer[answer.length - 1], answer[0]];
}
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        let answer = '';
        answer += ' '.repeat(num - 1 - i);
        answer += '*'.repeat(i);
        answer += '*';
        answer += '*'.repeat(i);
        arr.push(answer);
    }

    for (let i = 1; i < num; i++) {
        let answer = '';
        answer += ' '.repeat(i);
        answer += '*'.repeat(num - 1 - i);
        answer += '*';
        answer += '*'.repeat(num - 1 - i)
        arr.push(answer);
    }
    
    return arr.join("\n");
}

const num = Number(input[0].trim());
console.log(solution(num));
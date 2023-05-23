const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = '';

for (let i = 0; i < input.length; i++) {
    const n = +input[i];
    if (n === -1) {
        break;
    } else if (n > 0) {
        const arr = [];
        for (let j = 1; j < n; j++) {
            if (n % j === 0) arr.push(j);
        }
        
        const total = arr.reduce((acc, cur) => acc + cur);
        if (total === n) {
            answer += `${n} = ${arr.join(" + ")}\n`;
        } else {
            answer += `${n} is NOT perfect.\n`;
        }
    }
}

console.log(answer);
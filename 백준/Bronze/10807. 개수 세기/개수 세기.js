const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const searchNum = Number(input[2]);

let answer = 0;
input[1].split(" ").map(Number).forEach((num) => {
    if (num === searchNum) {
        answer += 1;
    }
});

console.log(answer);
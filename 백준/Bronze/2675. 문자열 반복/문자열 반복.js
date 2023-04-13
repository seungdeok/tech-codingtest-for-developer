const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ");
    let answer = "";
    const cnt = Number(line[0]);
    for (let str of line[1]) {
        for (let j = 0; j < cnt; j++) {
            answer += str
        }
    }
    console.log(answer);
}
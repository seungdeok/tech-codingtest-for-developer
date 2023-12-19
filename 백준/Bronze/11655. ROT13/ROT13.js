// 23.12.18
// https://www.acmicpc.net/problem/11655

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const S = input[0];

const answer = [];

for (let i = 0; i < S.length; i++) {
    const code = S[i].charCodeAt();

    if (code >= 97 && code <= 122) {
        const next = code + 13 > 122 ? code - 122 + 13 + 96  : code + 13;
        answer.push(String.fromCharCode(next))
    } else if (code >= 65 && code <= 90) {
        const next = code + 13 > 90 ? code - 90 + 13 + 64  : code + 13;
        answer.push(String.fromCharCode(next))
    } else {
        answer.push(S[i])
    }
}

console.log(answer.join(""));
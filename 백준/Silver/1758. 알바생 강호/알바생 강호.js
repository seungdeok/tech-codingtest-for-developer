// 23.12.13
// https://www.acmicpc.net/problem/1758

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input.shift());
const list = input.map(Number).sort((a, b) => b - a);

let answer = 0;

for (let i = 0 ; i < list.length; i++) {
    let temp = (list[i] - i >= 0) ? (list[i] - i) : 0;
    answer += temp;
}
console.log(answer)
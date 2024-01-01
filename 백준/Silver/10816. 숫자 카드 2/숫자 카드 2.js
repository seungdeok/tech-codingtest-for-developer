// 24.1.1 23:46 ~
// https://www.acmicpc.net/problem/10816
// 정렬

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const map = {};

for (const value of input[1].split(" ")) {
  if (map[value]) {
    map[value] += 1;
  } else {
    map[value] = 1;
  }
}

let answer = [];
for (const value of input[3].split(" ")) {
  answer.push(map[value] ?? 0);
}

console.log(answer.join(" "));

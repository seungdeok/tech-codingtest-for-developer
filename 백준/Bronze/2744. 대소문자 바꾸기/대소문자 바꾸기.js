// 23.12.31
// https://www.acmicpc.net/problem/2744
// 문자열

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const S = input[0];

let answer = "";

const alpha = "azAZ";

for (const char of S) {
  if (
    char.charCodeAt(0) >= alpha.charCodeAt(0) ||
    char.charCodeAt(0) >= alpha.charCodeAt(1)
  ) {
    answer += char.toUpperCase();
  } else {
    answer += char.toLowerCase();
  }
}

console.log(answer);
// 23.12.23
// https://www.acmicpc.net/problem/1343

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split(/\r?\n/);

const answer = input[0].replace(/XXXX/g, "AAAA").replace(/XX/g, "BB");

console.log(answer.includes("X") ? -1 : answer);
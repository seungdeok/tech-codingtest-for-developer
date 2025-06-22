/**
 * https://www.acmicpc.net/problem/1920
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const set = new Set(input[1].split(" ").map(Number));
const answer = [];

for (const num of input[3].split(" ").map(Number)) {
  answer.push(set.has(num) ? 1 : 0);
}

console.log(answer.join("\n"));
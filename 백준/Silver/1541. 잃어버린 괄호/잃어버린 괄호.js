/**
 * https://www.acmicpc.net/problem/1541
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split("-");

let answer = 0;
for (let i = 0; i < arr.length; i++) {
  const sum = arr[i].split("+").reduce((acc, cur) => acc + Number(cur), 0);
  if (i === 0) answer += sum;
  else answer -= sum;
}

console.log(answer);
/**
 * https://www.acmicpc.net/problem/11728
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1]
  .split(" ")
  .concat(input[2].split(" ").map(Number))
  .sort((a, b) => a - b);

console.log(arr.join(" "));
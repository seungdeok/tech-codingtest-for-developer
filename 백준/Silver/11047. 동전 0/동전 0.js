/**
 * https://www.acmicpc.net/problem/11047
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let count = 0;
let remaining = K;

for (let i = N - 1; i >= 0; i--) {
  if (remaining >= coins[i]) {
    count += Math.floor(remaining / coins[i]);
    remaining %= coins[i];
  }
}

console.log(count);
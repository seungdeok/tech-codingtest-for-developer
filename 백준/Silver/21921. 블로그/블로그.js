/**
 * https://www.acmicpc.net/problem/21921
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < X; i++) {
  sum += arr[i];
}

let max = sum;
let cnt = 1;

for (let i = X; i < N; i++) {
  sum = sum - arr[i - X] + arr[i];
  if (max <= sum) {
    if (max === sum) cnt++;
    else {
      max = sum;
      cnt = 1;
    }
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(cnt);
}
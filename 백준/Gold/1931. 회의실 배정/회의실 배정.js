/**
 * https://www.acmicpc.net/problem/1931
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, ...arr] = input;

let answer = 0;

const times = arr
  .map((num) => num.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

let endTime = 0;
for (const [start, end] of times) {
  if (start >= endTime) {
    answer++;
    endTime = end;
  }
}
console.log(answer);
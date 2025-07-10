/**
 * https://www.acmicpc.net/problem/2167
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [row, col] = input[0].split(" ").map(Number);
const arr = [Array(col + 1).fill(0)];
for (let i = 1; i <= row; i++) {
  arr.push([0, ...input[i].split(" ").map(Number)]);
}

const sum = Array.from({ length: row + 1 }, () =>
  Array.from({ length: col + 1 }, () => 0)
);

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
  }
}

const answer = [];
for (let k = 2 + row; k < input.length; k++) {
  const [i, j, x, y] = input[k].split(" ").map(Number);
  answer.push(sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1]);
}

console.log(answer.join("\n"));
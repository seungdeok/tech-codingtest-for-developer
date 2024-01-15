// 24.1.15
// https://www.acmicpc.net/problem/11660
// 누적합

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test-input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const matrix = input.slice(1, n + 1).map((str) => str.split(" ").map(Number));
let sumMatrix = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    sumMatrix[i][j] =
      matrix[i - 1][j - 1] +
      sumMatrix[i][j - 1] +
      sumMatrix[i - 1][j] -
      sumMatrix[i - 1][j - 1];
  }
}

const answer = [];

for (let i = n + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  answer.push(
    sumMatrix[x2][y2] -
      (sumMatrix[x1 - 1][y2] + sumMatrix[x2][y1 - 1]) +
      sumMatrix[x1 - 1][y1 - 1]
  );
}

console.log(answer.join("\n"));

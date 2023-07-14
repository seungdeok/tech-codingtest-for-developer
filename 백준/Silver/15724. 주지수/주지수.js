const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const list = input.splice(0, N).map((line) => line.split(" ").map(Number));

const prefixSum = [];
for (let i = 0; i < N; i++) {
  let sum = 0;
  const prefixPartialSum = [];
  for (let j = 0; j < M; j++) {
    sum += list[i][j];
    prefixPartialSum.push(sum);
  }
  prefixSum.push(prefixPartialSum);
}

function calSum(x1, x2, y1, y2) {
  let sum = 0;
  for (let i = x1; i <= x2; i++) {
    const end = prefixSum[i][y2];
    const start = y1 - 1 < 0 ? 0 : prefixSum[i][y1 - 1];
    sum += end - start;
  }

  return sum;
}

const K = +input.shift();
let answer = "";
for (const line of input) {
  const [x1, y1, x2, y2] = line.split(" ").map(Number);
  answer += `${calSum(x1 - 1, x2 - 1, y1 - 1, y2 - 1)}\n`;
}

console.log(answer.trim());

// 24.1.7
// https://www.acmicpc.net/problem/2979

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
const pricePerMinute = [A, B, C];

const arr = new Array(101).fill(0);

for (let i = 1; i < input.length; i++) {
  const [S, E] = input[i].split(" ").map(Number);

  for (let j = S; j < E; j++) {
    arr[j] += 1;
  }
}

let answer = 0;
for (const num of arr) {
  if (num > 0) {
    answer += pricePerMinute[num - 1] * num;
  }
}

console.log(answer);

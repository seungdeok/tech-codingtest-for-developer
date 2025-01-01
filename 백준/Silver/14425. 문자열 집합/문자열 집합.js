const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const set = new Set();
let answer = 0;

for (let i = 1; i <= N; i++) {
  set.add(input[i]);
}

for (i = 1 + N; i <= N + M; i++) {
  if (set.has(input[i])) {
    answer++;
  }
}

console.log(answer);
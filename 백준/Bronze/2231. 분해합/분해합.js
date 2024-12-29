const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const len = input[0].length;
const N = Number(input[0]);

let answer = 0;
for (let i = N - len * 9; i < N; i++) {
  let sum = i;
  let temp = i;

  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  if (sum === N) {
    answer = i;
    break;
  }
}

console.log(answer);

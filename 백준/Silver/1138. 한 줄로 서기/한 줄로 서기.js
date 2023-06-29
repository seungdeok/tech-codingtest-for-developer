// 2초 128MB
// 23.6.29
// 22:00 ~ 22:32

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const list = input[1].split(" ").map(Number);
const answer = Array(N).fill(0);

for (let i = 1; i <= N; i++) {
  let cnt = 0;

  for (let j = 0; j < N; j++) {
    if (cnt === list[i - 1] && answer[j] === 0) {
      answer[j] = i;
      break;
    } else if (answer[j] === 0) {
      cnt++;
    }
  }
}

console.log(answer.join(" "));

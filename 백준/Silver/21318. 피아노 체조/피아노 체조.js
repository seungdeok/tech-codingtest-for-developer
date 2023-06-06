// 0.5초 / 1024MB
// 23.06.06
// 09:56 ~ 10:29

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const papers = input[1].split(" ").map(Number);
const q = +input[2];

const mistakePrefixSum = [];
let mistake = 0;

for (let i = 0; i < papers.length; i++) {
  if (i < papers.length - 1 && papers[i] > papers[i + 1]) {
    mistake++;
  }
  mistakePrefixSum.push(mistake);
}

const answer = [];

for (let i = 1; i <= q; i++) {
  const [x, y] = input[i + 2].split(" ").map(Number);
  const dx = x - 1;
  const dy = y - 1;

  if (dx === dy) {
    answer.push(0);
    continue;
  }

  let cnt = mistakePrefixSum[dy];
  if (dx > 0) cnt -= mistakePrefixSum[dx - 1];
  if (dy < n - 1 && papers[dy] > papers[dy + 1]) cnt -= 1;

  answer.push(cnt);
}

console.log(answer.join("\n"));

// 1초 / 128MB
// 23.05.30
// 1040 ~ 1048

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);

const sum = [];

for (let i = 0; i <= n - m; i++) {
  let temp = 0;
  for (let j = i; j < i + m; j++) {
    temp += num[j];
  }
  sum.push(temp);
}

const max = sum.reduce((acc, cur) => Math.max(acc, cur));

console.log(max);

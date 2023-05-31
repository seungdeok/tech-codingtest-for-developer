// 0.15초 / 128MB
// 23.05.31
// 21:51 ~ 10:12

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = +input[0];
const cnt = Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  cnt[i] = cnt[i - 1] + 1;

  if (i % 3 === 0) {
    cnt[i] = Math.min(cnt[i], cnt[i / 3] + 1);
  }

  if (i % 2 === 0) {
    cnt[i] = Math.min(cnt[i], cnt[i / 2] + 1);
  }
}

console.log(cnt[n]);

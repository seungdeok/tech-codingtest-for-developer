const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const prefixSum = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}

let max = 0;
let cnt = 0;

for (let i = x; i <= n; i++) {
  const subSum = prefixSum[i] - prefixSum[i - x];
  if (subSum > max) {
    max = subSum;
    cnt = 1;
  } else if (subSum === max) {
    cnt++;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(cnt);
}

    // 2초 128MB
// 23.06.22
// 19:45 ~

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

function check(distance) {
  let cnt = C - 1;
  let prev = arr[0];
  for (let i = 1; i < N; i++) {
    if (arr[i] - prev >= distance) {
      cnt--;
      prev = arr[i];
    }
  }

  return cnt <= 0;
}

function binarySearch() {
  let left = 1;
  let right = arr[arr.length - 1];

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

const answer = binarySearch();

console.log(answer);

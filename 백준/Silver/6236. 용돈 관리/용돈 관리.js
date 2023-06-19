// 1초 128MB
// 23.06.19
// 10:50 ~

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

function binarySearch(arr, target) {
  const min = Math.max(...arr);
  const max = arr.reduce((acc, cur) => acc + cur);
  let start = min;
  let end = max;
  let answer = Infinity;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    let idx = 1;
    let total = mid;
    for (let i = 0; i < arr.length; i++) {
      const amount = arr[i];
      if (amount > total) {
        idx++;
        total = mid - amount;
      } else {
        total -= amount;
      }
    }

    if (idx <= target) {
      answer = Math.min(answer, mid);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);
const answer = binarySearch(arr, M);
console.log(answer);

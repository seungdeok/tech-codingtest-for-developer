// 2초 128MB
// 23.06.19
// 09:59 ~

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [K, N] = input[0].split(" ").map(Number);

function binarySearch(arr, target) {
  let start = 1;
  let end = Math.max(...arr);

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let n = 0;
    for (const cur of arr) {
      n += parseInt(cur / mid);
    }

    if (n >= target) {
      // return mid;
      start = mid + 1;
    } else if (n < target) {
      end = mid - 1;
    }
    // else if (n > target) {
    //   start = mid + 1;
    // }
  }

  return parseInt((start + end) / 2);
}

const arr = input.slice(1).map(Number);
const maxLen = binarySearch(arr, N);

console.log(maxLen);

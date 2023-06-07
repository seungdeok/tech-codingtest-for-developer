// 1초 / 1536MB
// 23.06.07
// 10:47 ~ 11:39

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid].startsWith(target)) {
      return mid;
    } else if (String(target) < String(arr[mid])) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);

const strArr = [];

for (let i = 1; i <= n; i++) {
  const str = input[i];

  strArr.push(str);
}

const sortedStrArr = strArr.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
});

let answer = 0;

for (let i = 1; i <= m; i++) {
  const prefixStr = input[i + n];

  if (binarySearch(sortedStrArr, prefixStr) !== -1) {
    answer++;
  }
}

console.log(answer);

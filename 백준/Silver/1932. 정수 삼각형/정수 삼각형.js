const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = input.map((line) => line.split(" ").map(Number));

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let prev;
    if (j === 0) prev = arr[i - 1][j];
    else if (j === i) prev = arr[i - 1][j - 1];
    else prev = Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    arr[i][j] += prev;
  }
}

console.log(Math.max(...arr[arr.length - 1]));

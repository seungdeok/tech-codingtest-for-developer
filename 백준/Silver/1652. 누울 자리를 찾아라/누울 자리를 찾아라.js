const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const arr = [];

for (const seat of input.slice(1)) {
  arr.push(seat);
}

let row = 0;
let column = 0;

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] === "." && j < arr.length - 1) {
      count++;
    } else if (arr[i][j] === "X" && j < arr.length - 1) {
      if (count > 1) {
        row++;
      }
      count = 0;
    } else if (j === arr.length - 1) {
      if (arr[i][j] === ".") {
        count++;
      }
      if (count > 1) {
        row++;
      }
      count = 0;
    }
  }
}

for (let j = 0; j < arr.length; j++) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] === "." && i < arr.length - 1) {
      count++;
    } else if (arr[i][j] === "X" && i < arr.length - 1) {
      if (count > 1) {
        column++;
      }
      count = 0;
    } else if (i === arr.length - 1) {
      if (arr[i][j] === ".") {
        count++;
      }

      if (count > 1) {
        column++;
      }
      count = 0;
    }
  }
}

console.log(`${row} ${column}`);

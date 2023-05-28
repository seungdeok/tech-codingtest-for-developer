const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const area = Array.from(Array(100), () => Array(100).fill(100));
const n = Number(input[0]);
const rec = input.slice(1).map((line) => line.split(" ").map(Number));

let size = 0;

for (let [x, y] of rec) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (area[i][j] !== 1) {
        size++;
        area[i][j] = 1;
      }
    }
  }
}

console.log(size);
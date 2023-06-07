// 1초 / 256MB
// 23.06.07
// 11:47 ~ 12:29

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

let table = Array.from({ length: m }, () => "");

for (let j = 0; j < m; j++) {
  for (let i = 1; i <= n; i++) {
    table[j] += input[i].charAt(j);
  }
}

let answer = 0;

while (true) {
  const arr = new Set();
  if (table[0].length === 1) {
    break;
  }

  for (let j = 0; j < m; j++) {
    const sliceStr = table[j].substring(1);
    table[j] = sliceStr;
    arr.add(table[j]);
  }

  if (arr.size < m) {
    break;
  } else {
    answer++;
  }
}

console.log(answer);

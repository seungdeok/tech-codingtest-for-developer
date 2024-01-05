// 24.1.6 00:27 ~ 00:46
// https://www.acmicpc.net/problem/2108

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

function getMode(arr) {
  const obj = {};

  for (const v of arr) {
    if (obj[v]) obj[v] += 1;
    else obj[v] = 1;
  }

  const list = Object.entries(obj).sort((a, b) => {
    return b[1] === a[1] ? a[0] - b[0] : b[1] - a[1];
  });

  return list[0][1] === list[1][1] ? list[1][0] : list[0][0];
}

const list = [];

for (let i = 1; i <= N; i++) {
  const value = Number(input[i]);
  list.push(value);
}

list.sort((a, b) => a - b);

const avg = Math.round(list.reduce((acc, cur) => acc + cur, 0) / N);
const mid = list[Math.floor(list.length / 2)];
const mode = list.length === 1 ? list[0] : getMode(list);
const bound = list[list.length - 1] - list[0];

console.log([avg, mid, mode, bound].join("\n"));

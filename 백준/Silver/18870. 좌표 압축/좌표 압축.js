// 24.1.10 11:21 ~ 11:41
// https://www.acmicpc.net/problem/18870

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const list = input[1].split(" ").map(Number);
const arr = [...new Set(list)].sort((a, b) => a - b);

const map = new Map();
for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], i);
}

const answer = [];
for (let i = 0; i < list.length; i++) {
  answer.push(map.get(list[i]));
}

console.log(answer.join(" "));

/**
 * https://www.acmicpc.net/problem/10816
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const map = new Map();
for (const num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}

const M = +input[2];
const cards = input[3].split(" ").map(Number);

const answer = [];
for (const num of cards) {
  answer.push(map.get(num) || 0);
}

console.log(answer.join(" "));
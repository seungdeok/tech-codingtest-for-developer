// 24.1.10 11:21 ~ 11:41
// https://www.acmicpc.net/problem/18870

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const str = input[0].trim();
const cnt = (str.match(/a/g) || []).length;

const circle = str + str;

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < circle.length - cnt; i++) {
  const temp = circle.slice(i, i + cnt);
  answer = Math.min(answer, (temp.match(/b/g) || []).length);
}

console.log(answer);

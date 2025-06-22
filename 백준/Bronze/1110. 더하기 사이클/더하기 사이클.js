/**
 * https://www.acmicpc.net/problem/1110
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

if (N === 0) {
  console.log(1);
  return;
}

let temp = N;
let answer = 0;

while (true) {
  const left = temp.toString().at(-1);
  temp = temp < 10 ? Number(`${temp}0`) : temp;
  const [A, B] = temp.toString().split("").map(Number);
  const right = (A + B).toString().at(-1);

  temp = Number(`${left}${right}`);
  answer++;

  if (N === temp) {
    console.log(answer);
    return;
  }
}
/**
 * https://www.acmicpc.net/problem/15666
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
const answer = new Set();

function backtrack(value) {
  if (value.length === M) {
    answer.add(value.join(" "));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (value.length === 0 || arr[i] >= value[value.length - 1]) {
      value.push(arr[i]);
      backtrack(value);
      value.pop();
    }
  }
}

backtrack([]);
console.log(
  [...answer]
    .sort((a, b) => {
      const arrA = a.split(" ").map(Number);
      const arrB = b.split(" ").map(Number);

      for (let i = 0; i < Math.min(arrA.length, arrB.length); i++) {
        if (arrA[i] !== arrB[i]) {
          return arrA[i] - arrB[i];
        }
      }
      return arrA.length - arrB.length;
    })
    .join("\n")
);
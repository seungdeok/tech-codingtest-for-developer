/**
 * https://www.acmicpc.net/problem/15654
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = [];
const visited = new Array(N).fill(false);

function backtrack(value) {
  if (value.length === M) {
    answer.push([...value]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      value.push(arr[i]);
      backtrack(value);
      value.pop();
      visited[i] = false;
    }
  }
}

backtrack([]);

console.log(answer.map((v) => v.join(" ")).join("\n"));
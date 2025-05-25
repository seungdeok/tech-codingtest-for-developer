/**
 * https://www.acmicpc.net/problem/1182
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = 0;

function backtracking(start, sum) {
  if (start === N) {
    if (sum === S) {
      answer++;
    }
    return;
  }

  backtracking(start + 1, sum + arr[start]);
  backtracking(start + 1, sum);
}

backtracking(0, 0);
console.log(answer - (S === 0 ? 1 : 0)); // S === 0는 빈 집합일 수 있기 때문에 1을 빼준다.
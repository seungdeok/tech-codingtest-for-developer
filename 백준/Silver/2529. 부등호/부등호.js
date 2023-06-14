// 1초 / 256MB
// 23.06.14
// 15:05 ~ 15:54

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const fomula = input[1].trim().split(" ");
let visited = Array(10).fill(false);

let min = "9".repeat(n + 1);
let max = "0".repeat(n + 1);

function dfs(fomulaIdx, curIdx, curStr) {
  if (fomulaIdx === n) {
    max = curStr > max ? curStr : max;
    min = curStr < min ? curStr : min;
    return;
  }

  if (fomula[fomulaIdx] === "<") {
    for (let i = curIdx + 1; i < 10; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      dfs(fomulaIdx + 1, i, curStr + i);
      visited[i] = false;
    }
  } else if (fomula[fomulaIdx] === ">") {
    for (let i = curIdx - 1; i > -1; i--) {
      if (visited[i]) continue;

      visited[i] = true;
      dfs(fomulaIdx + 1, i, curStr + i);
      visited[i] = false;
    }
  }
}

for (let i = 0; i <= 9; i++) {
  visited[i] = true;
  dfs(0, i, i.toString());
  visited[i] = false;
}

console.log(max);
console.log(min);
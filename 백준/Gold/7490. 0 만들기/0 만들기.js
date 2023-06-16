// 1초 / 128MB
// 23.06.16

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const tc = +input[0];

function dfs(v, end, str) {
  if (v === end) {
    if (eval(str.replaceAll(" ", "")) === 0) {
      console.log(str);
      return;
    }
    return;
  }

  const emptyStr = `${str} ${v + 1}`;
  dfs(v + 1, end, emptyStr);

  const plusStr = `${str}+${v + 1}`;
  dfs(v + 1, end, plusStr);

  const minusStr = `${str}-${v + 1}`;
  dfs(v + 1, end, minusStr);
}

for (let i = 1; i <= tc; i++) {
  const n = +input[i];

  dfs(1, n, "1");
  if (i < tc) {
    console.log();
  }
}
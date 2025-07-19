/**
 * https://www.acmicpc.net/problem/14395
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [S, T] = input[0].split(" ").map(Number);

if (S === T) {
  console.log("0");
  process.exit(0);
}

const queue = [[S, ""]];
const visited = new Set([S]);
let found = false;

while (queue.length) {
  const [total, answer] = queue.shift();

  for (const next of ["*", "+", "-", "/"]) {
    let v = total;
    if (next === "*") v *= total;
    if (next === "+") v += total;
    if (next === "-") v = 0;
    if (next === "/") {
      if (total === 0) continue;
      v = 1;
    }

    if (total === T) {
      console.log(answer);
      found = true;
      break;
    }

    if (!visited.has(v) && v >= 0 && v <= T) {
      visited.add(v);
      queue.push([v, answer + next]);
    }
  }
}

if (!found) {
  console.log("-1");
}
/**
 * https://www.acmicpc.net/problem/4949
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (const str of input) {
  if (str === ".") break;
  const stack = [];
  let check = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[") stack.push(str[i]);
    if (str[i] === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        check = false;
        break;
      }
      stack.pop();
    }
    if (str[i] === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        check = false;
        break;
      }
      stack.pop();
    }
  }

  answer.push(check && stack.length === 0 ? "yes" : "no");
}

console.log(answer.join("\n"));

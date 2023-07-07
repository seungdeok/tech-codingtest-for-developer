const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

const formula = input[1];

const alpha = {};

for (let i = 0; i < N; i++) {
  alpha[String.fromCharCode(65 + i)] = +input[i + 2];
}

const stack = [];

for (const char of formula) {
  if (alpha[char]) {
    stack.push(alpha[char]);
  } else {
    const num2 = stack.pop();
    const num1 = stack.pop();
    let result = 0;

    if (char === "+") {
      result = num1 + num2;
    } else if (char === "-") {
      result = num1 - num2;
    } else if (char === "*") {
      result = num1 * num2;
    } else if (char === "/") {
      result = +(num1 / num2).toFixed(2);
    }

    stack.push(result);
  }
}

console.log(stack[0].toFixed(2));

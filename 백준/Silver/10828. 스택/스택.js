// 0.25초 / 128MB
// 23.06.01
// 14:57 ~ 15:03

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];

const stack = [];

let answer = "";

for (let i = 1; i <= n; i++) {
  const line = input[i];

  if (line.includes("push")) {
    const [oper, num] = line.split(" ");

    stack.push(+num);
  } else if (line === "pop") {
    answer += `${stack.length ? stack.pop() : -1}\n`;
  } else if (line === "size") {
    answer += `${stack.length}\n`;
  } else if (line === "empty") {
    answer += `${stack.length ? 0 : 1}\n`;
  } else if (line === "top") {
    answer += `${stack.length ? stack[stack.length - 1] : -1}\n`;
  }
}

console.log(answer.trim());
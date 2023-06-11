// 0.5초 / 256MB
// 23.06.11
// 15:09 ~ 15:16

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];

const queue = [];
const answer = [];

for (let i = 1; i <= n; i++) {
  const [command, value] = input[i].split(" ");

  if (command === "push") {
    queue.push(value);
  } else if (command === "pop") {
    answer.push(queue.shift() ?? -1);
  } else if (command === "size") {
    answer.push(queue.length);
  } else if (command === "empty") {
    answer.push(queue.length ? 0 : 1);
  } else if (command === "front") {
    answer.push(queue[0] ?? -1);
  } else if (command === "back") {
    answer.push(queue[queue.length - 1] ?? -1);
  }
}

console.log(answer.join("\n"));

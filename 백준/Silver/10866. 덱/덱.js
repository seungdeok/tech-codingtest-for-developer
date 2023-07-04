const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let deque = [];
const answer = [];

for (const line of input.slice(1)) {
  const [command, inputValue] = line.split(" ");
  const value = +inputValue;

  if (command === "push_front") {
    deque = [value, ...deque];
  } else if (command === "push_back") {
    deque.push(value);
  } else if (command === "pop_front") {
    answer.push(deque.length ? deque.shift() : -1);
  } else if (command === "pop_back") {
    answer.push(deque.length ? deque.pop() : -1);
  } else if (command === "size") {
    answer.push(deque.length);
  } else if (command === "empty") {
    answer.push(deque.length ? 0 : 1);
  } else if (command === "front") {
    answer.push(deque.length ? deque[0] : -1);
  } else if (command === "back") {
    answer.push(deque.length ? deque[deque.length - 1] : -1);
  }
}

console.log(answer.join("\n"));

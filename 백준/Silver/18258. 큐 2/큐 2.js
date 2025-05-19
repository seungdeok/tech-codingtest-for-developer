/**
 * https://www.acmicpc.net/problem/18258
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

class Queue {
  arr = [];
  head = 0;
  tail = 0;

  push(X) {
    this.arr[this.tail++] = X;
  }

  pop() {
    return this.empty() ? -1 : this.arr[this.head++];
  }

  empty() {
    return this.tail - this.head === 0 ? 1 : 0;
  }

  size() {
    return this.tail - this.head;
  }

  front() {
    return this.empty() ? -1 : this.arr[this.head];
  }

  back() {
    return this.empty() ? -1 : this.arr[this.tail - 1];
  }
}

const queue = new Queue();
const answer = [];

for (const commands of input.slice(1)) {
  const [command, X] = commands.split(" ");
  if (command === "push") {
    queue.push(+X);
  }
  if (command === "pop") {
    answer.push(queue.pop());
  }
  if (command === "size") {
    answer.push(queue.size());
  }
  if (command === "empty") {
    answer.push(queue.empty());
  }
  if (command === "front") {
    answer.push(queue.front());
  }
  if (command === "back") {
    answer.push(queue.back());
  }
}
console.log(answer.join("\n"));

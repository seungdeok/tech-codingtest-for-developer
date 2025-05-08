/**
 * https://www.acmicpc.net/problem/7576
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const box = input.slice(1).map((line) => line.split(" ").map(Number));

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.arr[this.tail++] = item;
  }

  dequeue() {
    return this.head >= this.tail ? null : this.arr[this.head++];
  }

  size() {
    return this.tail - this.head;
  }
}

const queue = new Queue();
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.enqueue([i, j, 0]); // row, column, day
    }
  }
}

function bfs() {
  while (queue.size()) {
    const [x, y, day] = queue.dequeue();
    answer = Math.max(answer, day);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && box[nx][ny] === 0) {
        box[nx][ny] = 1;
        queue.enqueue([nx, ny, day + 1]);
      }
    }
  }
}

bfs();

let isCompleted = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 0) {
      isCompleted = false;
      break;
    }
  }
  if (!isCompleted) break;
}
console.log(isCompleted ? answer : -1);
/**
 * https://www.acmicpc.net/problem/11279
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[parentIndex] < this.heap[currentIndex]
    ) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return 0; // 가장 큰 값이 없을 때

    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (
      (leftChildIndex < this.heap.length &&
        this.heap[currentIndex] < this.heap[leftChildIndex]) ||
      (rightChildIndex < this.heap.length &&
        this.heap[currentIndex] < this.heap[rightChildIndex])
    ) {
      if (
        rightChildIndex >= this.heap.length ||
        this.heap[leftChildIndex] > this.heap[rightChildIndex]
      ) {
        [this.heap[currentIndex], this.heap[leftChildIndex]] = [
          this.heap[leftChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftChildIndex;
      } else {
        [this.heap[currentIndex], this.heap[rightChildIndex]] = [
          this.heap[rightChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightChildIndex;
      }

      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const N = Number(input[0]);
const heap = new MaxHeap();
const result = [];

for (let i = 1; i <= N; i++) {
  const x = Number(input[i]);

  if (x === 0) {
    result.push(heap.pop());
  } else {
    heap.push(x);
  }
}

console.log(result.join("\n"));
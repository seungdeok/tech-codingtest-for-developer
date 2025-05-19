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

class MinHeap {
  constructor(nums) {
    this.heap = nums;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  push(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const min = this.heap.pop();
    this.shiftDown(0);

    return min;
  }

  shiftUp(i) {
    const parentIndex = Math.floor((i - 1) / 2);

    if (parentIndex >= 0 && this.heap[i] < this.heap[parentIndex]) {
      [this.heap[i], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[i],
      ];
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(i) {
    const leftChildIndex = 2 * i + 1;
    const rightChildIndex = 2 * i + 2;
    let minIndex = i;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[minIndex]
    ) {
      minIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[minIndex]
    ) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== i) {
      [this.heap[minIndex], this.heap[i]] = [this.heap[i], this.heap[minIndex]];
      this.shiftDown(minIndex);
    }
  }
}

const heap = new MinHeap([]);
const answer = [];

for (const i of input.slice(1)) {
  const num = +i;

  if (num === 0) {
    if (heap.heap.length === 0) answer.push(0);
    else answer.push(heap.pop());
  }

  if (num > 0) {
    heap.push(num);
  }
}

console.log(answer.join("\n"));

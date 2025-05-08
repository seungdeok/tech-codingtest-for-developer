/**
 * https://www.acmicpc.net/problem/1753
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 다익스트라 > 힙이용

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.upHeap();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.downHeap();
    return root;
  }

  upHeap() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element[0] >= parent[0]) break;

      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  downHeap() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[0] < element[0]) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < leftChild[0])
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }

  size() {
    return this.heap.length;
  }
}

const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const graph = Array.from({ length: V + 1 }, () => []);
const visits = new Array(V + 1).fill(0);

for (let i = 2; i < E + 2; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  graph[u].push([v, w]);
}

const dist = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
const heap = new MinHeap();
heap.push([0, K]); // [dist, node]
dist[K] = 0;

while (heap.size()) {
  const [distance, node] = heap.pop();

  if (visits[node]) continue;
  visits[node] = 1;

  const nexts = graph[node];
  if (!nexts.length) continue;

  for (let i = 0, iter = nexts.length; i < iter; i++) {
    const [nextNode, nextDist] = nexts[i];

    if (dist[nextNode] > distance + nextDist) {
      dist[nextNode] = distance + nextDist;
      heap.push([dist[nextNode], nextNode]);
    }
  }
}

// 경로가 존재하지 않는 경우에는 INF를 출력
console.log(
  dist
    .slice(1)
    .map((e) => (e === Number.MAX_SAFE_INTEGER ? "INF" : e))
    .join("\n")
);
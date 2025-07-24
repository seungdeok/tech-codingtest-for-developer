/**
 * https://www.acmicpc.net/problem/1504
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const [v1, v2] = input[1 + E].split(" ").map(Number);

// min(1 -> v1 -> v2 -> N,  1 -> v2 -> v1 -> N)
// 1 -> v1, v2
// v1 -> v2, N
// v2 -> N, v1

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    if (this.size() === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let index = this.size() - 1;
    const inserted = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= inserted) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = inserted;
  }

  heapifyDown() {
    let index = 0;
    const count = this.size();
    const root = this.heap[index];

    while (index < count) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;

      if (leftIndex >= count) break;

      const smallerChildIndex =
        rightIndex < count && this.heap[rightIndex] < this.heap[leftIndex]
          ? rightIndex
          : leftIndex;

      if (root <= this.heap[smallerChildIndex]) break;

      this.heap[index] = this.heap[smallerChildIndex];
      index = smallerChildIndex;
    }

    this.heap[index] = root;
  }

  peek() {
    return this.heap[0] || null;
  }
}

const heap = new MinHeap();

function dijkstra(start, dist) {
  heap.enqueue([0, start]);
  dist[start] = 0;

  while (heap.size() !== 0) {
    const [curDist, curNode] = heap.dequeue();

    if (curDist > dist[curNode]) continue;

    for (const [nextNode, weight] of graph[curNode]) {
      const nextDist = curDist + weight;

      if (nextDist < dist[nextNode]) {
        dist[nextNode] = nextDist;
        heap.enqueue([nextDist, nextNode]);
      }
    }
  }

  return dist;
}

let distance = Array(N + 1).fill(Infinity);
dijkstra(1, distance);
const dis1ToV1 = distance[v1];
const dis1ToV2 = distance[v2];

distance = Array(N + 1).fill(Infinity);
dijkstra(v1, distance);
const disV1ToV2 = distance[v2];
const disV1ToN = distance[N];

distance = Array(N + 1).fill(Infinity);
dijkstra(v2, distance);
const disV2ToN = distance[N];
const disV2ToV1 = distance[v1];

const answer = Math.min(
  dis1ToV1 + disV1ToV2 + disV2ToN,
  dis1ToV2 + disV2ToV1 + disV1ToN
);

console.log(answer >= Infinity ? -1 : answer);
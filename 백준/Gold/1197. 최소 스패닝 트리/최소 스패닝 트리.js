/**
 * https://www.acmicpc.net/problem/1197
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.rank = new Array(n + 1).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }
}

const [V, E] = input[0].split(" ").map(Number);

const edges = [];
for (const edge of input.slice(1)) {
  edges.push(edge.split(" ").map(Number));
}

edges.sort((a, b) => a[2] - b[2]);

const uf = new UnionFind(V);
const mstEdges = [];
let answer = 0;

for (const [A, B, C] of edges) {
  // 사이클이 생기지 않으면 간선 추가
  if (uf.union(A, B)) {
    answer += C;

    // MST는 정점 개수 - 1개의 간선을 가짐
    if (mstEdges.length === V - 1) {
      break;
    }
  }
}

console.log(answer);
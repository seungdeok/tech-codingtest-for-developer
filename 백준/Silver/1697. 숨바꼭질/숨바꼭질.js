const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

const MAX = 100001; 
const [n, k] = input[0].split(" ").map(Number);
let visited = new Array(MAX).fill(0); // 최단 시간

function bfs() {
    const queue = [];
    queue.push(n); // 시작시점
    
    while(queue.length !== 0) {
        let currentIndex = queue.shift();
        if (currentIndex === k) {
            return visited[currentIndex];
        }
        for(let v of [currentIndex - 1, currentIndex + 1, currentIndex * 2]) {
            if (visited[v] === 0) {
                visited[v] = visited[currentIndex] + 1; // 방문 전이면 현재 시간에서 + 1
                queue.push(v);
            }
        }
    }
}

console.log(bfs());
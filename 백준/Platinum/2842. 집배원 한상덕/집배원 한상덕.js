/**
 * https://www.acmicpc.net/problem/2842
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const matrix = [];
const heights = [];
const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

let startPos = [0, 0];
let total = 0;
for (let i = 1; i <= N; i++) {
  const destRow = input[i].split("");
  const heightRow = input[i + N].split(" ").map(Number);

  matrix.push(destRow);
  heights.push(heightRow);

  for (let col = 0; col < destRow.length; col++) {
    if (destRow[col] === "K") {
      total++;
    } else if (destRow[col] === "P") {
      startPos = [i - 1, col];
    }
  }
}

const allHeights = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    allHeights.push(heights[i][j]);
  }
}
const uniqueHeights = [...new Set(allHeights)].sort((a, b) => a - b);

function BFS(minHeight, maxHeight) {
  const [startR, startC] = startPos;

  if (
    heights[startR][startC] < minHeight ||
    heights[startR][startC] > maxHeight
  ) {
    return false;
  }

  const queue = [[startR, startC]];
  const visited = new Set();
  visited.add(`${startR},${startC}`);
  let visitedHouses = 0;

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < N &&
        nc >= 0 &&
        nc < N &&
        heights[nr][nc] >= minHeight &&
        heights[nr][nc] <= maxHeight &&
        !visited.has(`${nr},${nc}`)
      ) {
        visited.add(`${nr},${nc}`);
        queue.push([nr, nc]);

        if (matrix[nr][nc] === "K") {
          visitedHouses++;
        }
      }
    }
  }

  return visitedHouses === total;
}

let left = 0;
let right = 0;
let answer = Infinity;

while (right < uniqueHeights.length) {
  if (BFS(uniqueHeights[left], uniqueHeights[right])) {
    answer = Math.min(answer, uniqueHeights[right] - uniqueHeights[left]);
    left++;
  } else {
    right++;
  }
}

console.log(answer);
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

function countPaint(board, row, col, start) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const expected = (start + i + j) % 2 === 0 ? "W" : "B";
      if (board[row + i][col + j] !== expected) count++;
    }
  }
  return count;
}

const [N, M] = input[0].split(" ").map(Number);

let answer = Infinity;
const board = [];

for (let i = 1; i <= N; i++) {
  board.push(input[i].split(""));
}

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const whiteStart = countPaint(board, i, j, 0);
    const blackStart = countPaint(board, i, j, 1);
    answer = Math.min(answer, whiteStart, blackStart);
  }
}

console.log(answer);
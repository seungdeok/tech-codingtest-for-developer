const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [R, C] = input[0].split(" ").map(Number);

const list = [];

for (let i = 1; i <= R; i++) {
  list.push(input[i].split(""));
}

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

function isTarget(y, x) {
  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    const sy = dy[i] + y;
    const sx = dx[i] + x;

    if (0 > sy || 0 > sx || R <= sy || C <= sx) {
      cnt++;
    } else if (0 <= sy && 0 <= sx && R > sy && C > sx && list[sy][sx] === ".") {
      cnt++;
    }
  }

  return cnt >= 3;
}

const answer = [];

let minY = R;
let minX = C;
let maxY = -1;
let maxX = -1;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (list[i][j] === "X") {
      if (isTarget(i, j)) {
        answer.push([i, j]);
      } else {
        minY = Math.min(minY, i);
        minX = Math.min(minX, j);
        maxY = Math.max(maxY, i);
        maxX = Math.max(maxX, j);
      }
    }
  }
}

for (const [y, x] of answer) {
  list[y][x] = ".";
}

for (let i = minY; i <= maxY; i++) {
  console.log(list[i].slice(minX, maxX + 1).join(""));
}

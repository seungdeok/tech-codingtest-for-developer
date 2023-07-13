const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const ds = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1).map((line) => line.split(""));
let sumW = 0;
let sumB = 0;

const checkRange = (ny, nx) => {
  if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
    return true;
  }

  return false;
};

const bfs = (x, y) => {
  let cnt = 0;
  const queue = [[x, y]];
  const cur = list[x][y];
  list[x][y] = "";

  while (queue.length) {
    const [cx, cy] = queue.shift();
    cnt++;

    for (let i = 0; i < 4; i++) {
      const nx = cx + ds[i][0];
      const ny = cy + ds[i][1];

      if (checkRange(ny, nx) && list[nx][ny] == cur) {
        list[nx][ny] = "";
        queue.push([nx, ny]);
      }
    }
  }
  cur == "W" ? (sumW += cnt ** 2) : (sumB += cnt ** 2);
};

for (let x = 0; x < M; x++) {
  for (let y = 0; y < N; y++) {
    if (list[x][y]) bfs(x, y);
  }
}
console.log(`${sumW} ${sumB}`);

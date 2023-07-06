const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [K, S, N] = input[0].split(" ");

const alphaToNum = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};

const numToAlpha = Object.keys(alphaToNum);

let [kx, ky] = K.split("");
let [sx, sy] = S.split("");

kx = alphaToNum[kx];
ky = +ky - 1;
sx = alphaToNum[sx];
sy = +sy - 1;

const arr = input.slice(1);

for (const command of arr) {
  let dy = 0;
  let dx = 0;
  if (command === "R") {
    dx = 1;
  } else if (command === "L") {
    dx = -1;
  } else if (command === "B") {
    dy = -1;
  } else if (command === "T") {
    dy = 1;
  } else if (command === "RT") {
    dx = 1;
    dy = 1;
  } else if (command === "LT") {
    dx = -1;
    dy = 1;
  } else if (command === "RB") {
    dx = 1;
    dy = -1;
  } else if (command === "LB") {
    dx = -1;
    dy = -1;
  }

  if (kx + dx < 0 || kx + dx > 7 || ky + dy < 0 || ky + dy > 7) continue;
  kx += dx;
  ky += dy;

  if (kx === sx && ky === sy) {
    if (sx + dx < 0 || sx + dx > 7 || sy + dy < 0 || sy + dy > 7) {
      kx -= dx;
      ky -= dy;
      continue;
    }
    sx += dx;
    sy += dy;
  }
}

console.log([numToAlpha[kx], ky + 1].join(""));
console.log([numToAlpha[sx], sy + 1].join(""));

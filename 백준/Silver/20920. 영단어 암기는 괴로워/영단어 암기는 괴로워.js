// 20920
// 23.12.16

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const dic = {};

for (let i = 1; i <= N; i++) {
  const key = input[i];

  if (key.length >= M) {
    if (dic[key]) {
      dic[key] += 1;
    } else {
      dic[key] = 1;
    }
  }
}

console.log(
  Object.entries(dic)
    .sort((a, b) => {
      if (b[0].length === a[0].length && b[1] === a[1]) {
        return a[0].localeCompare(b[0]);
      } else if (b[1] === a[1]) {
        return b[0].length - a[0].length;
      } else {
        return b[1] - a[1];
      }
    })
    .map((v) => v[0])
    .join("\n")
);

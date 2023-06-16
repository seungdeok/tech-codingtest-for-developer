// 2초 / 512MB
// 23.06.16
// 11:15 ~

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [a, b] = input.split(" ").map(Number);

function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

const list = permutations(a.toString().split(""), a.toString().length)
  .filter((v) => v[0] !== "0")
  .map((v) => +v.join(""))
  .sort((a, b) => b - a);

let answer = -1;
for (const num of list) {
  if (num < b) {
    answer = num;
    break;
  }
}

console.log(answer);
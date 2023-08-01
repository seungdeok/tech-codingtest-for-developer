const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim();

let N = input;
let answer = "";
while (N.length > 3) {
  let S = N.slice(N.length - 3, N.length);
  answer = parseInt(S, 2).toString(8) + answer;
  N = N.slice(0, N.length - 3);
}
console.log(parseInt(N, 2).toString(8) + answer);
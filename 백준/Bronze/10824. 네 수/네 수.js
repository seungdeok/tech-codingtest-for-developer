const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim();

const [A, B, C, D] = input.split(" ").map(Number);

const prefix = +(A.toString() + B.toString());
const postfix = +(C.toString() + D.toString());

console.log(prefix + postfix);

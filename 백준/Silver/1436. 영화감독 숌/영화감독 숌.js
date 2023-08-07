const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim();

const N = +input;

let cnt = 1;
let num = 666;

while (cnt !== N) {
  num++;
  if (String(num).indexOf("666") > -1) cnt++;
}

console.log(num);
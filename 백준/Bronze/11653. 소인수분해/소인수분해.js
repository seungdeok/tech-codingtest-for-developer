const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = +input[0];
let div = 2;
const answer = [];

while (true) {
  if (n % div === 0) {
    n /= div;
    answer.push(div);
    div = 2;
  } else {
    div++;
  }

  if (n === 1) break;
}

console.log(answer.join("\n"));
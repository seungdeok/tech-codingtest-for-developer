const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const target = Number(input[0]);

let n = 0;
let sum = 0;

while(sum <= target) {
    n++;
    sum += n;
}

console.log(n - 1);
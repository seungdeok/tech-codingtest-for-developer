const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function compare(a, b) {
    return a - b;
}

console.log(arr.sort(compare)[k - 1]);
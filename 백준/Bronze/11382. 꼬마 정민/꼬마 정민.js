const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);

console.log(A + B + C);
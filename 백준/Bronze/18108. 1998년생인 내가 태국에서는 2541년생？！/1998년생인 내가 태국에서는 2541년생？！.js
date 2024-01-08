const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(Number(input[0]) - 543);
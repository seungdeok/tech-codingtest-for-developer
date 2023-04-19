const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input[0].split("").map(Number);

console.log(arr.sort((a, b) => b - a).join(""));
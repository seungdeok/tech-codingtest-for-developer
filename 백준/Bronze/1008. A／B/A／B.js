const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [num1, num2] = input[0].split(" ").map(Number);

console.log(num1/ num2);
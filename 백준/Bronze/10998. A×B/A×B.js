const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("/n");
const result = input[0].split(" ");

const num1 = Number(result[0]);
const num2 = Number(result[1]);

console.log(num1 * num2);
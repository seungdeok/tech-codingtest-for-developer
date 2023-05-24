const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const number = input[0].split(" ");

const num1 = BigInt(number[0]);
const num2 = BigInt(number[1]);

console.log((num1 + num2).toString());
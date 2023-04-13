const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const list = input[1].split('').map(Number).reduce((acc, cur) => acc + cur);
console.log(list);

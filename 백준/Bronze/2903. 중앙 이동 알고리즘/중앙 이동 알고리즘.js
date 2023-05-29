const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

const line = (2 ** n) + 1

console.log(line ** 2);
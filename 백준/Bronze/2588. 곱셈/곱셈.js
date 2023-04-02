const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);

const b1 = Number(b.toString().split("")[0]);
const b2 = Number(b.toString().split("")[1]);
const b3 = Number(b.toString().split("")[2]);

console.log(a * b3);
console.log(a * b2);
console.log(a * b1);
console.log(a * b);
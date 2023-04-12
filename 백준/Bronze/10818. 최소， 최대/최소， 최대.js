const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line1 = Number(input[0]);
const line2 = input[1].split(" ").map((num) => Number(num));

const max = line2.reduce((acc, cur) => Math.max(acc, cur));
const min = line2.reduce((acc, cur) => Math.min(acc, cur));

console.log(`${min} ${max}`);

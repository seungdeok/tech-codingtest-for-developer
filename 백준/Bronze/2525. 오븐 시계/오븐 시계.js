const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [h, m] = input[0].split(" ").map(Number);
const duration = Number(input[1]);

const tot = ((h * 60) + m + duration) % 1440;
const hour = parseInt(tot / 60);
const minute = tot % 60;

console.log(`${hour} ${minute}`);

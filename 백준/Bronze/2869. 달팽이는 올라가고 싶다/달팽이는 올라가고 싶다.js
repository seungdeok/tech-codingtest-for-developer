const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const [front, back, height] = input[0].split(" ").map(Number);

console.log(Math.ceil((height - back) / (front - back)));
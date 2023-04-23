// Q1. Math.max
// Q2. Array.join()
// Q. Array.reduce()

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 1. Define n
const n = Number(input[0]);

// 2. Calculate new score(origin score / max * 100) using max
const scores = input[1].split(" ").map(Number);
const max = Math.max(...scores);

const newScores = scores.map((score) => (score / max) * 100);

// 3. Calculate avg using new scores
const avg = newScores.reduce((acc, cur) => acc + cur) / newScores.length;

console.log(avg);
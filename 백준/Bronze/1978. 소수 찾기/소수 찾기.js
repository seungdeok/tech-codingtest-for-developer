const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function checkDivisors(num) {
  const arr = [];

  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) arr.push(i);
  }

  return !(arr.length > 0);
}

const answer = [];

const list = input[1].split(" ").map(Number);
for (let num of list) {
  const isDivisors = checkDivisors(num);
  if (isDivisors) {
    answer.push(num);
  }
}

console.log(answer.length);
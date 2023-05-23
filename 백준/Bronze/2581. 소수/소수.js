const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const min = +input[0];
const max = +input[1];

function checkDivisors(num) {
  const arr = [];

  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) arr.push(i);
  }

  return arr.length === 0;
}

const answer = [];
for (let i = min; i <= max; i++) {
  if (checkDivisors(i)) {
    answer.push(i);
  }
}

if (!answer.length) {
  console.log(-1);
} else {
  const sum = answer.reduce((acc, cur) => acc + cur);
  const minimum = answer.reduce((acc, cur) => Math.min(acc, cur));

  console.log(sum);
  console.log(minimum);
}


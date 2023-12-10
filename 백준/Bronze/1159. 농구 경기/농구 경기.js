const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

input.shift();
input.sort();
let answer = "";

const dic = {};

for (const item of input.slice(1)) {
  const first = item.charAt(0);

  if (!dic[first]) dic[first] = 1;
  else dic[first] += 1;
}

for (const key in dic) {
  const value = dic[key];

  if (value >= 5) {
    answer += key;
  }
}

console.log(answer ? answer : "PREDAJA");
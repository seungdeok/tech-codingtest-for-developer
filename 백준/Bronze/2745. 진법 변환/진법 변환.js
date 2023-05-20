const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].trim().split(" ");

let answer = 0;

const numMap = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

const arr = n.toString().split("");

for (let i = 0; i < arr.length; i++) {
  const num = isNaN(arr[i]) ? numMap[arr[i]] : +arr[i];

  if (i === arr.length - 1) answer += num;
  else answer += num * Math.pow(+k, arr.length - 1 - i);
}

console.log(answer);
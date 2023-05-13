const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [count, max] = input[0].split(" ").map(Number);
const students = input[1].split(" ").map(Number);

const ascArr = students.sort((a, b) => a - b);

console.log(ascArr[count - max]);
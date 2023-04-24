// Q1. String.length?

// 1. Define input using fs module
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Define string from input
const str = input[0];

// 3. print string length
console.log(str.length);
// Q1. String.charCodeAt(0) ?

// 1. Define input using fs module.
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Get string from 1st index of input
const str = input[0].trim();

// 3. Convert string to ASCII using String.charCodeAt
console.log(str.charCodeAt(0));
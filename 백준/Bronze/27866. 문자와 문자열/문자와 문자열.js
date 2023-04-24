// Q1. String.chatAt 써도되는가?

// 1. Define input using fs module
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Define string and index of string from 1st index of input.
const str = input[0];
const idx = Number(input[1]);

// 3. Print using String.charAt
console.log(str.charAt(idx -1));
// Q1. String.charAt?

// 1. Define input using fs module
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Get test case count.
const testCase = Number(input[0]);

// 3. Repeat testCase times. Get 1th and last index of string.
for (let i = 1; i <= testCase; i++) {
    const str = input[i].trim();
    console.log(str.charAt(0) + str.charAt(str.length - 1));
}
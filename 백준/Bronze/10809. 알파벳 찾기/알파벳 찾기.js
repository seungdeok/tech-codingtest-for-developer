// Q1. string.indexOf ?
// Q2. array.join ?

// 1. Define input using fs module.
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Define set of alphabets and string of input[0].
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const str = input[0].trim();

// 3. Repeat set of 2. Define new Array and Insert index of -1.
const answer = [];
for (let i = 0; i < alphabets.length; i++) {
    answer.push(str.indexOf(alphabets[i]));
}

// 4. print
console.log(answer.join(" "));
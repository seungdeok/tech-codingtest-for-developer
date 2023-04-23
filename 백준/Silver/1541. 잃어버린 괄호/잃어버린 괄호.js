// Q1. 공백이 있을 수 있는가?

// 1. Define input value using module fs
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Divide Groups by "-"
const groups = input[0].split("-");

// 3. Caluate each groups and Sum groups
const arr = groups.map((groups) => {
    const item = groups.split("+").map(Number);
    return item.reduce((acc, cur) => acc + cur);
});

let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
   sum -= arr[i]; 
}

// 4. Print
console.log(sum);
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = 0;

for (let i = 1; i <= Number(input[0]); i++) {
    num += i;
}

console.log(num);
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let index = -1;
let max = -1;
for (let i = 0; i < 9; i++) {
    const num = Number(input[i]);
    if (num > max) {
        max = num;
        index = i;
    }
}

console.log(max);
console.log(index + 1);


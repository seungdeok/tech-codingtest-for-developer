const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const output = [];

for (let i = 0; i < 10; i++) {
    const remind = Number(input[i]) % 42;
    if (output.indexOf(remind) === -1) {
         output.push(remind);
    }
}

console.log(output.length);
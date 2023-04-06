const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const testCase = Number(input[0]);
let output = "";

for (let i = 1; i <= testCase; i++) {
    const line = input[i].split(" ");
    const sum = Number(line[0]) + Number(line[1]);
    output += sum + "\n";
}
console.log(output);
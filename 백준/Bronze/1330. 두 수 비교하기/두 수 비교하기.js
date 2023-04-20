const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [num1, num2] = input[0].split(" ").map(Number);

if (num1 > num2) {
    console.log(">");
} else if (num1 < num2) {
    console.log("<");
} else {
    console.log("==");
}
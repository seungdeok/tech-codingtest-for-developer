const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    const [num1, num2] = input[i].split(" ").map(Number);
    console.log(num1 + num2);
}
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const totalAmount = Number(input[0]);
const n = Number(input[1]);

let answer = 0;
for (let i = 2;i <= n + 1; i++) {
    const [amount, count] = input[i].split(" ").map(Number);
    answer += amount * count;
}

if (totalAmount === answer) {
    console.log("Yes");
} else {
    console.log("No");
}
      
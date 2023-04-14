const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [orgNum1, orgNum2] = input[0].split(" ");
let num1 = '';
let num2 = '';

for (let i = 2; i >= 0; i--) {
    num1 += orgNum1.charAt(i);
    num2 += orgNum2.charAt(i);
}

if (Number(num1) > Number(num2)) {
    console.log(num1);
} else {
    console.log(num2);
}


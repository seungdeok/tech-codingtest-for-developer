const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = 0;
while(1) {
    const [num1, num2] = input[n].split(" ").map(Number);
    
    if (num1 === 0 && num2 === 0) {
        break;
    } else {
        console.log(num1 + num2);
        n++;
    }
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [before, after] = input[0].split(" ").map(Number);

let num = after;
let count = 1;
let flag = false;

while (before <= num) {
    if (num === before) {
        flag = true;
        break;
    } else if (num % 10 === 1) {
        num = parseInt(num / 10);
        count++;
    } else if (num % 2 === 0) {
        num = parseInt(num / 2);
        count++;
    } else {
        break;
    }
}

if (flag) {
    console.log(count);
} else {
    console.log(-1);
}

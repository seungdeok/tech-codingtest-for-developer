const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, x] = input[0].split(" ").map(Number);

const arr = [];
input[1].split(" ").map(Number).forEach((num) => {
    if (num < x) {
        arr.push(num);
    }
});

console.log(arr.join(" "));
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n ,k] = input[0].trim().split(" ").map(Number);

const divideArr = [];
for (let i = 1; i <= n; i++) {
    if (n % i === 0) divideArr.push(i);
}

if (divideArr.length < k) console.log(0);
else console.log(divideArr[k - 1]);
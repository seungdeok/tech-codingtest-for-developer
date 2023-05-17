const [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let total = 0;

for (let i = 1; i <= k; i++) {
    total += i;
}

if (n < total) {
    console.log(-1);
} else {
    if ((n - total) % k === 0) console.log(k - 1);
    else console.log(k);
}


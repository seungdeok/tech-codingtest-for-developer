const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].trim().split(" ").map(Number);

const a = []
const b = [];

for (let i = 1; i <= n; i++) {
    const line = input[i].trim().split(" ").map(Number);
    a.push(line);
}

for (let i = n + 1; i <= 2 * n; i++) {
    const line = input[i].trim().split(" ").map(Number);
    b.push(line);
}

let sum = a;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        sum[i][j] = a[i][j] + b[i][j];
    }
}

sum.forEach((line) => {
    console.log(line.join(" "));
});
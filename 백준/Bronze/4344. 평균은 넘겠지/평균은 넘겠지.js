const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
    const data = input[i].split(" ").map((value) => Number(value));
    const n = Number(data[0]);

    let sum = 0;
    for (let j = 1; j <= n; j++) {
        sum += data[j];
    }
    
    const avg = sum / n;
    
    let aboveAvg = 0;
    for (let j = 1; j <= n; j++) {
        if (data[j] > avg) {
            aboveAvg += 1;
        }
    }
    
    console.log(`${(aboveAvg / n * 100).toFixed(3)}%`);
}
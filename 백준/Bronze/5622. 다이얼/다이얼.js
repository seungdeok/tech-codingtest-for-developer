const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let minTime = 0;

input[0].trim().split("").forEach((str) => {    
    arr.forEach((dial, index) => {
        if (dial.includes(str)) {
            minTime += index + 3;
        }
    });
});

console.log(minTime);
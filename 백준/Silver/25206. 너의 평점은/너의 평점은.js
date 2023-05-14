const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const socreMap = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
}

let totalCount = 0;
let totalScore = 0;
for (let item of input) {
    const [name, count, rank] = item.split(" ");
    
    if (rank === "P") {
    } else {
        totalScore += Number(count) * socreMap[rank];
        totalCount += Number(count);
    }
}

console.log((totalScore / totalCount));
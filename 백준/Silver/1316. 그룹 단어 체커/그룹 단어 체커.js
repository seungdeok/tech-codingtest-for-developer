const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function checkGroupWord(data) {
    const groupWord = new Set(data[0]);
    
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] !== data[i + 1]) {
            if (groupWord.has(data[i + 1])) {
                return false;
            } else {
                groupWord.add(data[i + 1]);
            }
        }
    }
    
    return true;
}

const n = Number(input[0]);
let cnt = 0;
for (let i = 1; i <= n; i++) {
    if (checkGroupWord(input[i])) {
        cnt += 1;
    }
}

console.log(cnt);
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);

function compare(a, b) {
    return a - b;
};

const sortedArr = [...new Set(arr)].sort(compare);

const map = new Map();
for (let i = 0; i < sortedArr.length; i++) {
    map.set(sortedArr[i], i);
}

const answer = [];
for (item of arr) {
    answer.push(map.get(item));
}

console.log(answer.join(" "));
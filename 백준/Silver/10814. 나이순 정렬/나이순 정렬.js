const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    const [
        age,
        name,
    ] = input[i].split(" ");
    arr.push({
        index: i,
        age: Number(age),
        name,
    });
}

function compare(a, b) {
    if (a.age !== b.age) {
        return a.age - b.age;
    } else {
        return a.index - b.index;
    }
}

let answer = '';
arr.sort(compare).forEach(({
    age,
    name
}) => {
    answer += `${age} ${name}\n`;
});

console.log(answer);
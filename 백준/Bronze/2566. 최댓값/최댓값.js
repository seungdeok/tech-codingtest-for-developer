const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = -1;
let coordi = [1,1];

for (let i = 0; i < 9; i++) {
    const line = input[i].split(" ").map(Number);
    for (let j = 0; j < 9; j++) {
        if (answer < line[j]) {
            answer = line[j];
            coordi = [i + 1, j + 1];
        }
    }
}

console.log(answer);
console.log(coordi.join(" "));
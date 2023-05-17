const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const ballons = input[1].split(" ").map(Number);

let arr = new Array(10000001).fill(0);
let count = 0;
for (let item of ballons) {
    if (arr[item] > 0) {
        arr[item] -= 1;
        arr[item - 1] += 1;
    } else {
        count += 1;
        arr[item - 1] += 1;
    }
}
console.log(count);
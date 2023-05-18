const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = arr.reduce((acc, cur) => Math.max(acc, cur));
let answer = 0;

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    
    for (let v of arr) {
        if (v > mid) {
            total += v - mid;
        }
    }
    
    if (m === total) {
        answer = mid;
        break;
    } else if (m > total) {
        end = mid - 1;
    } else {
        answer = mid;
        start = mid + 1;
    }
}

console.log(answer);
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];
const regions = input[1].split(" ").map(Number).sort((a, b) => a - b);
const total = +input[2];

let start = 0;
let end = regions.reduce((acc, cur) => Math.max(acc, cur));
let result = 0;

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let amount = 0;
    
    for (let v of regions) {
        amount += Math.min(mid, v);
    }
    
    if (total === amount) {
        result = mid;
        break;
    } else if (total > amount) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result);
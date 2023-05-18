const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];
const list = input[1].split(" ").map(Number).reverse();

const answer = [0];

function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        
        if (arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

for (let i = 0 ; i< list.length; i++) {
    if (answer[answer.length - 1] < list[i]) {
        answer.push(list[i]);
    } else {
        const idx = lowerBound(answer, list[i], 0, answer.length);
        answer[idx] = list[i];
    }
}

console.log(n - (answer.length - 1));
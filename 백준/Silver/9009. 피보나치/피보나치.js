const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = [0, 1];
while(arr[arr.length -1] <= 1000000000){
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
}


for (let i = 1; i <= n; i++) {
    let v = +input[i];
    const answer = [];
    
    let num = v;
    let idx = arr.length - 1;
    
    while (num > 0) {
           if (num >= arr[idx]) {
               num -= arr[idx];
               answer.push(arr[idx]);
           }
           idx--;
    }
    
    console.log(answer.sort((a, b) => a - b).join(" "));
}
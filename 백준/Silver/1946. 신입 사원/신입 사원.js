const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
    const n = Number(input[line]);
    const arr = [];
    
    for (let i = line + 1; i <= line + n; i++) {
        const data = input[i].split(" ").map(Number);
        arr.push(data);
    }
    
    arr.sort((n1, n2) => n1[0] - n2[0]);
    
    let count = 0;
    let minValue = 100001;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] < minValue) {
            count++;
            minValue = arr[i][1];
        }
    }
    console.log(count);
    line += n + 1;
}
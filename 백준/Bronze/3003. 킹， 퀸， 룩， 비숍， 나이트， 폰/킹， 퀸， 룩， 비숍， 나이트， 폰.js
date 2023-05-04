const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성
const arr = [1, 1, 2, 2, 2, 8];
const inputArr = input[0].split(' ').map(Number);

let answer = '';

arr.forEach((num, idx) => {
   answer += `${num - inputArr[idx]} `; 
});

console.log(answer.trim());
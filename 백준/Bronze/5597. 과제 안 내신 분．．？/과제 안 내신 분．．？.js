// Q1. Array.sort() 함수 사용 가능?
// Q2. Array.join() 함수 사용 가능?

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 1. 30개의 index를 가진 배열 선언
let arr = new Array(30).fill(0);

// 2. 28 번 반복하며 출석이 불린 학생의 경우 배열 값을 1로 업데이트
for (let i = 0; i < 28; i++) {
    arr[Number(input[i]) - 1] = 1;
}

// 3. 불려지지 않은 값을 배열에 넣고 sort 함수로 오름차순 정렬
const sortedArr = arr
    .map((value, idx) => value === 0 ? idx + 1 : -1)
    .filter((value) => value !== -1)
    .sort((a, b) => a - b);

// 4. 한 줄씩 출력
console.log(sortedArr.join("\n"));
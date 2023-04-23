// Q1: m, n의 범위는? 1 <= m,n <= 100
// Q2: Array.join() 함수를 사용해도 되는가?

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 1. m, n을 구한다.
const [m ,n] = input[0].split(" ").map(Number);

// 2. 1 ~ m 숫자를 배열에 담는다.
let arr = new Array(m).fill(0).map((value, index) => index + 1);

// 3. n번 반복하며 배열에 두 인덱스의 값을 교환한다.
for (let i = 1; i <= n; i++) {
    const [idx1, idx2] = input[i].split(" ").map(Number);
    
    let temp = arr[idx2 - 1];
    arr[idx2 - 1] = arr[idx1 - 1];
    arr[idx1 - 1] = temp;
}

// 4. 배열을 문자열로 출력한다.
console.log(arr.join(" "));
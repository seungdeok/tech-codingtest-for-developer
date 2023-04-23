// m,n은 자연수
// 범위는 1 <= m,n <= 100

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 1. m, n 입력을 받음.
const [m, n] = input[0].split(" ").map(Number);

// 2/ 1~m인 map 객체를 생성
const obj = new Map();

for (let i = 1; i <= m; i++) {
    obj.set(i, 0);
}

// 3. n번 반복하며 입력 받은 값을 해당 map 객체에 넣음.
for (let i = 1; i <= n; i++) {
    const [s, e, num] = input[i].split(" ").map(Number);
    
    for (let j = s; j<= e; j++) {
        obj.set(j, num);
    }
}

// 4. 1~m에 들어있는 번호를 출력한다.
const arr = [];
for (let i = 1; i <= m; i++) {
   arr.push(obj.get(i));
}
console.log(arr.join(" "));
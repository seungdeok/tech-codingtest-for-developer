// Q1 Array.reverse()
// Q2 Array.join

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 1. Define m,n from input
const [m ,n] = input[0].split(" ").map(Number);

// 2. Define an array of length m and value (index + 1) 
const arr = new Array(m).fill(0).map((value, index) => index + 1);
let reservedArr = arr.slice();

// 3. Repeat n times. Reverse the array between two indices.
for (let i = 1; i <= n; i++) {
    const [idx1, idx2] = input[i].split(" ").map(Number);
    
    reservedArr = reservedArr.slice(0, idx1 - 1)
        .concat(reservedArr.slice(idx1 - 1, idx2).reverse())
        .concat(reservedArr.slice(idx2));
}

// 4. Print
console.log(reservedArr.join(" "));
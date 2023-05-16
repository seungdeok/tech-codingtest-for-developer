const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const distance = input[1].split(" ").map((num) => BigInt(num));
const price = input[2].split(" ").map((num) => BigInt(num));


let answer = BigInt(0);
let curPrice = price[0];
for (let i = 0; i < distance.length; i++) {
    answer += curPrice * distance[i];
    if (price[i] > price[i + 1]) {
        curPrice = price[i + 1];
    }
}

console.log(String(answer));
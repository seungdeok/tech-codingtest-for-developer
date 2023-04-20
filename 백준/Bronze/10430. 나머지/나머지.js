/*
첫째 줄에 (A+B)%C
둘째 줄에 ((A%C) + (B%C))%C
셋째 줄에 (A×B)%C
넷째 줄에 ((A%C) × (B%C))%C
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);
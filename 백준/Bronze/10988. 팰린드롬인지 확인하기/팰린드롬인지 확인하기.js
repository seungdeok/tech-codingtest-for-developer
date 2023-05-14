const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let isEqual = true;

const mid = Math.floor(input.length / 2);

for (let i = 0; i < mid; i++) {
    if (input.charAt(i) !== input.charAt(input.length - 1 - i)) {
        isEqual = false;
    }
}
        
console.log(isEqual ? '1' : '0');
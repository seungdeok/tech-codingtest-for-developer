const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const dice1 = Number(input[0].split(" ")[0]);
const dice2 = Number(input[0].split(" ")[1]);
const dice3 = Number(input[0].split(" ")[2]);

function solution() {
    if (dice1 === dice2) {
        if (dice2 === dice3) {
            return 10000 + (1000 * dice3);
        }
        
        return 1000 + (100 * dice1);
    } else if (dice2 === dice3) {
        if (dice3 === dice1) {
            return 10000 + (1000 * dice3);
        }
        
        return 1000 + (100 * dice2);
    } else if (dice3 === dice1) {
        if (dice1 === dice2) {
            return 10000 + (1000 * dice3);
        }
        
        return 1000 + (100 * dice3);
    }
    
    const max = [dice1, dice2, dice3].reduce((acc, cur) => Math.max(acc, cur));
    return max * 100;
}

console.log(solution());
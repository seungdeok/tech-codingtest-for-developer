const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(str) {
    let output = str;
    
    for (let s of croatia) {
        output = output.split(s).join("m");
    }
    
    return output.length;
}

console.log(solution(input));
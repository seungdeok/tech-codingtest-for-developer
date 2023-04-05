// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력
const fs = require("fs");

function solution() {
    const input = fs.readFileSync('/dev/stdin').toString().split("/n");
    const score = Number(input[0]);
    
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } if (score >= 70 && score < 80) {
        return 'C';
    } if (score >= 60 && score < 70) {
        return 'D';
    }
    return 'F';
}

console.log(solution());
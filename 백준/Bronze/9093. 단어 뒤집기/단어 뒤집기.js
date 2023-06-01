// 1초 / 128MB
// 23.06.01
// 15:13 ~

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

let answer = "";

for (let i = 1; i <= n; i++) {
  let tempStr = [];
  const str = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    tempStr.push(str[j].split("").reverse().join(""));
  }

  answer += `${tempStr.join(" ")}\n`;
}

console.log(answer.trim());
// 1초 / 128MB
// 23.06.01
// 15:19 ~

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

let answer = "";

function isVPS(str) {
  let cnt = 0;

  if (str.length % 2 !== 0) return false;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") cnt++;
    else if (str.charAt(i) === ")") cnt--;
    
    if (cnt < 0) break;
  }
  if (cnt !== 0) return false;

  return true;
}

for (let i = 1; i <= n; i++) {
  const str = input[i];
  answer += `${isVPS(str) ? "YES" : "NO"}\n`;
}

console.log(answer.trim());

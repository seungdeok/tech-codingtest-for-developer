const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const alpha = "abcdefghijklmnopqrstuvwxyz";
const answer = new Array(alpha.length).fill(0);
const str = input[0].split("");
for (let i = 0; i < str.length; i++) {
  answer[alpha.indexOf(str[i])]++;
}

console.log(answer.join(" "));
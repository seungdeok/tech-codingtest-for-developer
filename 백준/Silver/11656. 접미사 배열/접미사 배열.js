const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim();

const answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(input.substring(i));
}

answer.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
});

console.log(answer.join("\n"));

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const set = new Set();

for (let i = 1; i <= str.length; i++) {
  for (let j = 0; j <= str.length - i; j++) {
    set.add(str.substring(j, j + i));
  }
}

console.log(set.size);
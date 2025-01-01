const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const set = new Set();

for (let i = 1; i <= N; i++) {
  const [name, command] = input[i].split(" ");
  if (command === "enter") {
    set.add(name);
  } else if (command === "leave") {
    set.delete(name);
  }
}

console.log([...set].sort().reverse().join("\n"));

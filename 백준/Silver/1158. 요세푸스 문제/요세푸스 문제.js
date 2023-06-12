const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [n, k] = input.split(" ").map(Number);

const queue = Array.from({ length: n }).map((_, i) => i + 1);

const answer = [];

let count = 1;

while (queue.length) {
  const num = queue.shift();

  if (count % k === 0) {
    answer.push(num);
  } else {
    queue.push(num);
  }

  count += 1;
}

console.log(`<${answer.join(", ")}>`);

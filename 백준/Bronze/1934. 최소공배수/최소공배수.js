const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};

const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);

const answer = [];

const N = +input[0];

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  answer.push(lcm(A, B));
}

console.log(answer.join("\n"));
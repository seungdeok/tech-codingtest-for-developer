const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim();

const [A, B] = input.split(" ").map(Number);

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};

const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);

console.log(gcd(A, B), lcm(A, B));
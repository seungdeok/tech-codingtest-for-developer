/**
 * https://www.acmicpc.net/problem/1629
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(BigInt);

function cal(num) {
  if (num === 0n) return 1n;
  if (num === 1n) return A % C;

  const half = cal(num / 2n) % C;
  if (num % 2n === 1n) {
    // 홀수
    return (half * half * (A % C)) % C;
  }
  // 짝수
  return (half * half) % C;
}

console.log(cal(B).toString());
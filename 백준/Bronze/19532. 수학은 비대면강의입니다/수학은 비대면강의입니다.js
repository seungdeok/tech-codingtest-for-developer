const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map(Number);
// ax + by = c
// dx + ey = f

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(`${x} ${y}`);
      break;
    }
  }
}

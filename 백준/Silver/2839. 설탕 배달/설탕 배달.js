const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// Define total weight
let weight = Number(input[0]);

let count = 0;

while (true) {
  if (weight % 5 === 0) {
    console.log(weight / 5 + count);
    break;
  }
    
  if (0 > weight) {
    console.log(-1);
    break;
  }

  count++;
  weight -= 3;
}

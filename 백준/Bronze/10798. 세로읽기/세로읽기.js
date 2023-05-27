const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = [];

for (let i = 0; i < input.length; i++) {
  const str = input[i];

  for (let j = 0; j < str.length; j++) {
    if (!arr[j]) arr[j] = str.charAt(j);
    else arr[j] += str.charAt(j);
  }
}

console.log(arr.join(""));
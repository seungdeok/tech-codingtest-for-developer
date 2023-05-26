let [n, unit] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(Number(n).toString(unit).toUpperCase());
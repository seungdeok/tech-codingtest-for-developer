const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].trim();
if (line === "") {
    console.log(0);
} else {
    console.log(line.split(" ").length);   
}
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input.slice(1).sort((a, b) => {
  if (a.length === b.length) {
    let aNum = a
      .replace(/[A-Z]/g, "")
      .split("")
      .reduce((acc, cur) => acc + +cur, 0);
    let bNum = b
      .replace(/[A-Z]/g, "")
      .split("")
      .reduce((acc, cur) => acc + +cur, 0);

    if (aNum > bNum) {
      return -1;
    } else if (aNum < bNum) {
      return 1;
    } else {
      if (a > b) return -1;
      else if (a < b) return 1;
      return 0;
    }
  } else if (a.length > b.length) {
    return -1;
  } else if (a.length < b.length) {
    return 1;
  }
  return 0;
});

console.log(arr.reverse().join("\n"));

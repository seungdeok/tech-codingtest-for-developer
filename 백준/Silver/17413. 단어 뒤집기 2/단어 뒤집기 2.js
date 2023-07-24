const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim();

const tags = input.match(/<[a-z ]+>/g) ?? [];
const words = input.split(/<[a-z ]+>/);
const reversedWords = words.map((word) =>
  word
    .split(" ")
    .map((w) => [...w].reverse().join(""))
    .join(" ")
);
const answer =
  tags.map((tag, i) => reversedWords[i] + tag).join("") +
  reversedWords[reversedWords.length - 1];

console.log(answer.trim());

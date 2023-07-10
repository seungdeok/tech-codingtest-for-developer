function solution(numbers) {
    if (numbers.length === numbers.filter((item) => item === 0).length) return "0";
    const answer = numbers
        .sort((a, b) => {
            return `${b}${a}` - `${a}${b}`;
        })
        .join("")
        .toString();

    return answer;
}
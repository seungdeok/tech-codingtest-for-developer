function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];
  
    for (let i = 0; i < answers.length; i++) {
        if (one[i % 5] === answers[i]) result[0]++;
        if (two[i % 8] === answers[i]) result[1]++;
        if (three[i % 10] === answers[i]) result[2]++;
    }
    
    const answer = [];
    const max = Math.max(...result);
    
    if (result[0] === max) {answer.push(1)};
    if (result[1] === max) {answer.push(2)};
    if (result[2] === max) {answer.push(3)};

    return answer;
}
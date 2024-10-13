function repeatArray(array, count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(array[i % array.length]);
    }
    return result;
}


function solution(answers) {
    const person1 = repeatArray([1,2,3,4,5], answers.length);
    const person2 = repeatArray([2,1,2,3,2,4,2,5], answers.length);
    const person3 = repeatArray([3,3,1,1,2,2,4,4,5,5], answers.length);
    
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === person1[i]) {
            answer1++;
        }
        if (answers[i] === person2[i]) {
            answer2++;
        }
        if (answers[i] === person3[i]) {
            answer3++;
        }
    }
    
    const max = Math.max(...[answer1, answer2, answer3]);
    const answer = [answer1, answer2, answer3].reduce((acc, cur, index) => {
        if (cur === max) {
            acc.push(index + 1);
        }
        return acc;
    }, []);
    
    return answer;
}
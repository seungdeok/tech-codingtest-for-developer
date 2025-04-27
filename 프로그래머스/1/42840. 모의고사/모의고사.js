function solution(answers) {    
    function checkPerson(arr, i) {
        return arr[i % arr.length];
    }
    
    let person1 = 0;
    let person2 = 0;
    let person3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (checkPerson([1,2,3,4,5], i) === answers[i]) {
            person1++;
        } 
        if (checkPerson([2,1,2,3,2,4,2,5], i) === answers[i]) {
            person2++;
        }
        if (checkPerson([3,3,1,1,2,2,4,4,5,5], i) === answers[i]) {
            person3++;
        }
    }
    
    const max = Math.max(person1, person2, person3);
    
    const answer = [];
    
    if (person1 === max) answer.push(1);
    if (person2 === max) answer.push(2);
    if (person3 === max) answer.push(3);
    
    return answer;
}
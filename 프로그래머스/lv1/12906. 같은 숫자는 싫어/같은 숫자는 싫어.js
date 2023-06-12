function solution(arr)
{
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            answer.push(arr[0]);
        } else if (arr[i - 1] !== arr[i]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
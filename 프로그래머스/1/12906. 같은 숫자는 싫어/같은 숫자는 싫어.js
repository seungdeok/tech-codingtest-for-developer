function solution(arr) {
    const answer = [arr[0]];
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (prev !== arr[i]) {
            answer.push(arr[i]);
            prev = arr[i];
        }
    }
    return answer;
}

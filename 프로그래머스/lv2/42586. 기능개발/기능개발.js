function solution(progresses, speeds) {
    const answer = [0];
    const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDays = days[0];
    
    let idx = 0;
    for (let i = 0; i < days.length; i++) {
        if(days[i] <= maxDays) {
            answer[idx] += 1;
        } else {
            maxDays = days[i];
            answer[++idx] = 1;
        }
    }

    return answer;
}
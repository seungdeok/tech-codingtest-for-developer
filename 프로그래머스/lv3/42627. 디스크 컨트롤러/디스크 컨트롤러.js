function solution(jobs) {
    let answer = 0;
    let queue = [];

    jobs.sort((u, v) => {
        return u[0] - v[0];
    });

    const len = jobs.length;
    let i = 0;
    let now = 0;
    while (i < len || queue.length > 0) {
        if (i < len && jobs[i][0] <= now) {
            queue.push(jobs[i++]);
            continue;
        }
        queue.sort((u, v) => {
            return u[1] - v[1];
        });
        
        if (queue.length > 0) {
            const job = queue.shift();
            now += job[1];
            answer += now - job[0];
        } else {
            now = jobs[i][0];
        }
    }

    return Math.floor(answer / len);
}
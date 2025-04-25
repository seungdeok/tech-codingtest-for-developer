function solution(priorities, location) {
    const queue = priorities.map((value, index) => ({
        isCheck: index === location,
        priority: value,
    }));
    
    const answer = [];
    
    while (queue.length) {
        const cur = queue.shift();
        
        if (queue.findIndex((v) => v.priority > cur.priority) !== -1) {
            queue.push(cur);
        } else {
            answer.push(cur);
        }
    }
    
    return answer.findIndex((v) => v.isCheck) + 1;
}
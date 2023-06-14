function solution(priorities, location) {
    const queue = priorities.map((value, index) => ({
        priority: value,
        isLocated: index === location,
    }));
    
    const answer = [];
    
    while (queue.length) {
        const cur = queue.shift();
        const isExisted = queue.findIndex((item) => item.priority > cur.priority) !== -1;
        
        if (isExisted) {
            queue.push(cur);
        } else {
            answer.push(cur);
        }
    }
    
    return answer.findIndex((item) => item.isLocated) + 1;
}
function solution(priorities, location) {
    const queue = priorities.map((value, index) => {
        return {
            isLocated: index === location,
            priority: value,
        };
    });
    
    const answer = [];
    
    while (queue.length) {
        const cur = queue.shift();
        
        const maxIdx = queue.findIndex((item) => item.priority > cur.priority);
        
        if (maxIdx !== -1) {
            queue.push(cur);
        } else {
            answer.push(cur);
        }
    }
    
    return answer.findIndex((item) => item.isLocated) + 1;
}
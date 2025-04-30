function solution(tickets) {
    const answer = [];
    const target = tickets.length + 1;
    const visited = Array(tickets.length).fill(false);
    
    const dfs = (path) => {
        if (path.length === target) {
            answer.push(path);
        } else {
            for(const i in tickets) {
                if(!visited[i]) {
                    const [start, end] = tickets[i];
                    if (path[path.length - 1] === start) {
                        visited[i] = true;
                        dfs([...path, end]);
                        visited[i] = false;
                    }
                }
            }
        }
    }
    
    dfs(["ICN"]);
    
    return answer.sort()[0]; // 알파벳 순서
}
function solution(citations) {
    citations.sort((a , b) => b - a);
    let answer = 0;
    
    for (const citation of citations) {
        if (answer < citation) {
            answer++
        }
    }
    
    return answer;
}
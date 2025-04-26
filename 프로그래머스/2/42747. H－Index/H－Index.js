function solution(citations) {
    citations.sort((a, b) => b - a);
    
    let h = 0;
    
    for (const citation of citations) {
        if (h < citation) {
            h++;
        }
    }
    
    return h;
}
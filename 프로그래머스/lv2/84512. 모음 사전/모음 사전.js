function solution(word) {
    const result = [];
    
    function dfs(word, len) {
        if (len === word.length) {
            result.push(word);
            return;
        }

        const vowels = [..."AEIOU"];
        for (const str of vowels) {
            dfs(word + str, len);
        }
    }
    
    for (let i = 1; i <= 5; i++) dfs("", i);
    
    const answer = result
        .sort((a, b) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
            })
        .indexOf(word);
    
    return answer + 1;
}
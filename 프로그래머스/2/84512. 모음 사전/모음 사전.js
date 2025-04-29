function solution(word) {
    const dict = [];
    const vowels = ["A", "E", "I", "O", "U"];
    
    function backtacking(str, len) {
        if (len === str.length) {
            dict.push(str);
            return;
        }
        
        for (const c of vowels) {
            backtacking(str + c, len);
        }
    }
    
    for (let i = 1; i <= 5; i ++) {
        backtacking("", i);
    }
    
    return dict.sort().indexOf(word) + 1;
}
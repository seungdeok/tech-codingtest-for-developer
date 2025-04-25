function solution(phone_book) {
    const hash = new Set(phone_book);
    
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if (hash.has(prefix)) {
                return false;
            }
        }
    }
    
    return true;
}
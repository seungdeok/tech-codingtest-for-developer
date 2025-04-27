// 에라토스테네스의 체
function isPrime(x) {
    if(x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    function combination(curNum) {
        if(curNum.length > 0) {
            result.add(Number(curNum));
        }
        for(let i = 0; i < numbers.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                combination(curNum + numbers[i]);
                visited[i] = false;
            }
        }
    }
    
    const result = new Set();
    const visited = new Array(numbers.length).fill(false);
    
    combination('');
    return Array.from(result).filter(isPrime).length;
}
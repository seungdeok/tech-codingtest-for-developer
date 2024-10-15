

function solution(numbers, target) {
    function dfs(index, currentSum) {
        if (index === numbers.length) {
            return currentSum === target ? 1 : 0;
        }

        return dfs(index + 1, currentSum + numbers[index]) + dfs(index + 1, currentSum - numbers[index]);
    }
    
    return dfs(0, 0);
}


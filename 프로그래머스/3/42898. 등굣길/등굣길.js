function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));
    dp[1][1] = 1;
    
    for (const puddle of puddles) {
        dp[puddle[1]][puddle[0]] = -1;
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (dp[i][j] === -1) {
                continue;
            }
            if (i === 1 && j === 1) continue;
            
            if (i > 1 && dp[i-1][j] !== -1) {
                dp[i][j] += dp[i-1][j];
            }
            
            if (j > 1 && dp[i][j-1] !== -1) {
                dp[i][j] += dp[i][j-1];
            }
            
            dp[i][j] %= MOD;
        }
    }
    
    return dp[n][m];
}
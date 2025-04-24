function solution(n, lost, reserve) {
    const losts = lost
    .filter((num) => !reserve.includes(num))
    .sort((a, b) => a - b);

  const reserves = reserve
    .filter((num) => !lost.includes(num))
    .sort((a, b) => a - b);
    
    const cnt = losts.filter((a) => {
        return reserves.find((b, i) => {
            const has = b === a - 1 || b === a + 1;
            if (has) {
                delete reserves[i];
            }
            return has;
        });
    }).length;
    
    return n - (losts.length - cnt);
}
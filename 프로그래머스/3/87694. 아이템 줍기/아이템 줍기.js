function solution(rectangle, characterX, characterY, itemX, itemY) {
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    const dobuleRec = rectangle.map(rec => rec.map(point => point * 2));
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [[characterX, characterY, 0]];
    const range = Array.from({ length: 103 }, () => Array(103).fill(0));

    // 테두리(1) 테두리 내부(2), 빈 공간(0)
    dobuleRec.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
          for (let j = y1; j <= y2; j++) {
            if (i === x1 || i === x2 || j === y1 || j === y2) {
              if (range[i][j] === 0) range[i][j] = 1;
            } else {
              range[i][j] = 2;
            }
          }
        }
    });

    range[characterX][characterY] = 0
    
    while(queue.length > 0){
        let [x, y, cnt] = queue.shift();
    
        if(x === itemX && y === itemY) return cnt / 2; // 원래 좌표대로 / 2
    
        for(let i = 0; i < 4; i++){
            const nextX = x + dx[i];
            const nextY = y + dy[i];
            if(range[nextX][nextY] === 1) {
                queue.push([nextX, nextY, cnt+1]); 
                range[nextX][nextY] = 0;
            }
        }
    }
    return 0;
}
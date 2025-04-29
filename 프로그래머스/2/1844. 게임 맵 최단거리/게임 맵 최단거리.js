

function solution(maps) {
    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];
    
    const maxY = maps.length;
    const maxX = maps[0].length;
    
    const [destY, destX] = [maxY - 1, maxX - 1];
    
    const queue = [[0, 0, 1]];
    
    while (queue.length){
        const [curY, curX, move] = queue.shift();
        if(curY === destY && curX === destX) return move;

        for(let i = 0; i < 4; i++) {
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            if(ny >= 0 && ny < maxY && nx >= 0 && nx < maxX && maps[ny][nx] === 1) {
                queue.push([ny, nx, move + 1]);
                maps[ny][nx] = 0;
            }
        }
    }
     
    return -1;
}
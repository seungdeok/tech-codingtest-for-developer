function findEmpty(board) {
    let empty = -1;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                empty = [i, j];
                break;
            }
        }
        if (empty !== -1) {
            break;
        }
    }
    return empty;
}

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const target = [[1,2,3], [4,5,0]];

    if (JSON.stringify(board) === JSON.stringify(target)) return 0;

    const queue = [];
    queue.push([[...board],0]);
    const visited = new Set();
    visited.add(JSON.stringify(board));

    while (queue.length) {
        const [cur, move] = queue.shift();

        let empty = findEmpty(cur);
        const [n, m] = [board.length, board[0].length];
        const [r, c] = [empty[0], empty[1]];
        const directions = [[1,0], [0, 1], [-1,0], [0, -1]];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
                const newCur = cur.map((row) => [...row]);
                [newCur[r][c], newCur[nr][nc]] = [newCur[nr][nc], newCur[r][c]];

                const nextMove = move + 1;
                if (JSON.stringify(newCur) === JSON.stringify(target)) {
                    return nextMove;
                }

                if (!visited.has(JSON.stringify(newCur))) {
                    queue.push([newCur, nextMove]);
                    visited.add(JSON.stringify(newCur));
                }
            }
        }        
    } 

    return -1;
};
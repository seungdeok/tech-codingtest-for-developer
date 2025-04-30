// (0,0)에서 시작하는 모양으로 재정렬
function rearrange(list) {
    const minX = Math.min(...list.map(c => c[0]));
    const minY = Math.min(...list.map(c => c[1]));
    return list.map(c => [c[0]-minX, c[1]-minY]).sort();
}

// 같은 방향으로 정렬
function rotate(list) {
    if(list.length === 1) return list;
    let result = [];
    let shape = list.map(l => l);
    let width = Math.max(...shape.map(s => s[1])) - Math.min(...shape.map(s => s[1]));
    let height = Math.max(...shape.map(s => s[0])) - Math.min(...shape.map(s => s[0]));
    let w;

    for(let i = 0; i < 4; i++) {
        let temp = rearrange(shape.map(c => [c[1], width - c[0]]));
        shape = temp;
        result.push(shape);
        w = width;
        width = height;
        height = w;
    }
    
    return result.sort()[0];
}

function dfs(table, x, y, list, find) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1]
    const stack = [[x,y]];
    const len = table.length;
    list.push([x,y]);
    
    while(stack.length) {
        let [a, b] = stack.pop();
        let moveX, moveY;
        table[y][x] = -1;
    
        for(let i = 0; i < 4; i++) {
            moveX = a + dx[i];
            moveY = b + dy[i];
            
            if(moveX < 0 || moveX >= len || moveY < 0 || moveY >= len) continue;
            
            if(table[moveY][moveX] === find) {
                table[moveY][moveX] = -1;
                stack.push([moveX, moveY]);
                list.push([moveX, moveY]);
            }
        }
    }
}

function solution(game_board, table) {
    let answer = 0;
    const spaces = [];
    let puzzles = [];
    
    for(let y = 0; y < table.length; y++) {
        for(let x = 0; x < table[0].length; x++) {
            if(game_board[y][x] === 0) {
                let space = [];
                dfs(game_board, x, y, space, 0);
                space = rearrange(space);
                space = rotate(space);
                spaces.push(space);
            }
            if(table[y][x] === 1) {
                let puzzle = [];
                dfs(table, x, y, puzzle, 1);
                puzzle = rearrange(puzzle);
                puzzle = rotate(puzzle);
                puzzles.push(puzzle);
            }
        }
    }
    
    for(let space of spaces) {
        for(let i = 0; i < puzzles.length; i++) {
            if(JSON.stringify(space) === JSON.stringify(puzzles[i])) {
                answer += puzzles[i].length;
                puzzles = puzzles.map((p,idx) => idx === i ? [] : p);
                break;
            }
        }
    }
    
    return answer;
}
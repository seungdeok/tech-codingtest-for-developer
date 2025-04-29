// 부모 노드를 찾음
function getParent(parent, node){
    if(parent[node] === node){
        return node;
    } 
    parent[node] = getParent(parent, parent[node]);
    return parent[node];
}

// 두 부모 노드를 합침
function union(parent, a, b){
    const parentA = getParent(parent, a);
    const parentB = getParent(parent, b);

    if (a > b) {
        parent[parentA] = parentB;
    } else {
        parent[parentB] = parentA;
    }
}

// 같은 부모인지 확인
function find(parent, a, b) {
    const parentA = getParent(parent, a);
    const parentB = getParent(parent, b);
    
    return parentA === parentB;
}

function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    const parent = Array(n).fill().map((_, i) => i);
    
    let answer = 0;
    let edgeCount = 0;
    
    for (const [a, b, cost] of costs) {
        if (!find(parent, a, b)) {
            union(parent, a, b);
            answer += cost;
            edgeCount++;
            if (edgeCount === n - 1) break;
        }
    }
    
    return answer;
}
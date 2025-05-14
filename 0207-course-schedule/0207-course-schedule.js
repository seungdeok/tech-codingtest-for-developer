/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []); 
    for (const [i ,j] of prerequisites) {
        graph[i].push(j);
    }
    const visited = Array(numCourses).fill(0);

    function dfs(node){
        if (visited[node] === 1) return false;
        if (visited[node] === 2) return true;

        visited[node] = 1;
        for (const next of graph[node]) {
            if (!dfs(next)) {
                return false;
            }
        }

        visited[node] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && !dfs(i)) {
            return false;
        }
    }

    return true;
};
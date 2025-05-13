/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const answer = [];
    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            currentLevel.push(node?.val ?? 0);
            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }

        if (currentLevel.length) answer.push(currentLevel);
    }

    return answer;
};
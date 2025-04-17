/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const searchNodeDepth = (node, depth) => {
    if(node === null) return depth;
    const currentDepth = depth + 1;
    const leftDepth = searchNodeDepth(node.left, currentDepth);
    const rightDepth = searchNodeDepth(node.right, currentDepth);
    
    const max = Math.max(leftDepth, rightDepth);
    return max;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const answer = searchNodeDepth(root, 0);

    return answer;
};
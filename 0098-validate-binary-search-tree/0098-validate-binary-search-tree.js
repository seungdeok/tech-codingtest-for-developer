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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function helper(root, min, max){
        if (!root){
            return true
        }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)){
            return false
        }
        
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
};
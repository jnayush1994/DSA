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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;

    let findDepth = function (curr) {
        if (!curr) return 0;
        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);
        let currentDepth = leftDepth + rightDepth;
        
        maxDiameter = Math.max(maxDiameter, currentDepth);
        
        return 1 + Math.max(leftDepth, rightDepth);
    }

    findDepth(root);

    return maxDiameter;
};
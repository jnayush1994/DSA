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
var isBalanced = function (root) {
    let ans = true;
    let calculateHeight = function (curr) {
        if (!curr) return 0;
        let leftTreeHeight = calculateHeight(curr.left);
        let rightTreeHeight = calculateHeight(curr.right);
        if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) ans = ans && false;
        return 1 + Math.max(leftTreeHeight, rightTreeHeight);
    }
    calculateHeight(root);
    return ans;
};
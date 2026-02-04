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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let result = [];
    let traversal = function (curr) {
        if (!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        result.push(curr.val);
    }
    traversal(root);
    return result;
};
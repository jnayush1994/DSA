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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    let ans = null;
    let traversal = function (curr) {
        if (!curr) return;
        if (curr.val === val)
            ans = curr;
        if (curr.val > val) traversal(curr.left);
        if (curr.val < val) traversal(curr.right);
    }
    traversal(root)
    return ans;
};
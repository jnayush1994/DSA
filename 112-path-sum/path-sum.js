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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let ans = false;

    let traversal = function (curr, currSum) {
        if (!curr.left && !curr.right) {
            if (curr.val + currSum === targetSum)
                ans = ans || true;
        }
        curr.left && traversal(curr.left, curr.val + currSum);
        curr.right && traversal(curr.right, curr.val + currSum);
    }

    traversal(root, 0);

    return ans;
};
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
var goodNodes = function (root) {
    let goodNode = 0;
    let max = -Infinity;

    let traversal = function (curr, max) {
        if (!curr) return;

        if (max <= curr.val) {
            ++goodNode;
            max = curr.val;
        }

        traversal(curr.left, max);
        traversal(curr.right, max);
    }

    traversal(root, max);

    return goodNode;
};
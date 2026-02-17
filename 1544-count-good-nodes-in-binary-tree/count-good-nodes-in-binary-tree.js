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

    let traversal = function (curr, max1) {
        if (!curr) return;

        if (max1 <= curr.val) {
            ++goodNode;
            max1 = curr.val;
        }

        traversal(curr.left, max1);
        traversal(curr.right, max1);
    }

    traversal(root, max);

    return goodNode;
};
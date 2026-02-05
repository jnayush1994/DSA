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
var inorderTraversal = function (root) {
    // let result = [];

    // let traversal = function (curr) {
    //     if (!curr) return;
    //     traversal(curr.left);
    //     result.push(curr.val);
    //     traversal(curr.right);
    // }

    // traversal(root);

    // return result;

    let result = [];
    let current = root;
    let stack = [];

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;

    }

    return result;
};
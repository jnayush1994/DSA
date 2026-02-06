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
    // let result = [];
    // let traversal = function (curr) {
    //     if (!curr) return;
    //     traversal(curr.left);
    //     traversal(curr.right);
    //     result.push(curr.val);
    // }
    // traversal(root);
    // return result;
    let result = [];
    let s1 = [];
    let s2 = [];
    let current;

    if (root) s1.push(root);
    else return result;

    while (s1.length) {
        current = s1.pop();
        s2.push(current.val);
        if (current.left) s1.push(current.left);
        if (current.right) s1.push(current.right);
    }

    return s2.reverse();
};
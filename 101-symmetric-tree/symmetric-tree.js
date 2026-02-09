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
var isSymmetric = function (root) {
    // let isMirror = function (left, right) {
    //     if (!left && !right) return true;
    //     if (!left || !right) return false;
    //     return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    // }
    // return isMirror(root.left, root.right);
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    let queue = [root.left, root.right];
    let n1 = null;
    let n2 = null;

    while (queue.length) {
        n1 = queue.shift();
        n2 = queue.shift();

        if (!n1 && !n2) continue;
        if (!n1 || !n2) return false;
        if (n1.val !== n2.val) return false;

        queue.push(n1.left);
        queue.push(n2.right);
        queue.push(n1.right);
        queue.push(n2.left);
    }
    return true;
};
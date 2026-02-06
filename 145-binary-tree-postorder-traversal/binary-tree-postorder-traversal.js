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
    // let s1 = [];
    // let s2 = [];
    // let current;

    // if (root) s1.push(root);
    // else return [];

    // while (s1.length) {
    //     current = s1.pop();
    //     s2.push(current.val);
    //     if (current.left) s1.push(current.left);
    //     if (current.right) s1.push(current.right);
    // }

    // return s2.reverse();
    let result = [];
    let stack = [];
    let peakNode = null;
    let current = null;
    let lastVisitedNode = null;

    if (root) current = root;
    else return result;

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        peakNode = stack[stack.length - 1];
        if (peakNode.right && peakNode.right !== lastVisitedNode)
            current = peakNode.right;
        else {
            lastVisitedNode = stack.pop();
            result.push(lastVisitedNode.val);
        }
    }

    return result;
};
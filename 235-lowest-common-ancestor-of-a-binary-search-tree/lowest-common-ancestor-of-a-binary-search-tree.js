/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;

    let traversal = function (curr) {
        if (ans) return;
        if (curr.val < p.val && curr.val < q.val)
            curr.right && traversal(curr.right);
        else if (curr.val > p.val && curr.val > q.val)
            curr.left && traversal(curr.left);
        else ans = curr;
    }

    traversal(root);

    return ans;
};
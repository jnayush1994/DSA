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
var isValidBST = function (root) {
    let ans = null;

    let isBST = (curr, low, high) => {
        if (!curr) return true;
        if (low !== null && curr.val <= low) return false;
        if (high !== null && curr.val >= high) return false;

        let isLeftBST = isBST(curr.left, low, curr.val);
        let isRightBST = isBST(curr.right, curr.val, high);

        return isLeftBST && isRightBST;
    }

    ans = isBST(root, null, null);
    return ans;
};
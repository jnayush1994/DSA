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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const store = [];

    const traversal = (curr) => {
        if (!curr) return;
        traversal(curr.left);
        store.push(curr.val);
        traversal(curr.right);
    }
    traversal(root);

    let i = 0;
    let j = store.length - 1;

    while (i < j) {
        let sum = store[i] + store[j];
        if (sum === k)
            return true;
        if (sum < k)
            i++;
        if (sum > k)
            j--;
    }
    return false;
};
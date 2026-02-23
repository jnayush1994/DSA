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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        const node = new TreeNode();
        node.val = val;
        return node;
    }

    let traversal = function (curr, parent) {
        if (!curr) {
            let newNode = new TreeNode();
            newNode.val = val;

            if (parent.val > val) {
                parent.left = newNode;
            }
            else {
                parent.right = newNode;
            }

            return;
        }

        if (curr.val > val) traversal(curr.left, curr);
        else traversal(curr.right, curr);
    }

    traversal(root, null);
    return root;
};
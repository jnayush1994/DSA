/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**{TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let queue = [];
    let ans = [];
    let level = 0;

    if (!root) return ans;

    queue.push(root);

    while (queue.length) {
        let levelArr = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            if (level % 2 === 0)
                levelArr.push(curr.val);
            else
                levelArr.unshift(curr.val);
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }
        ans.push(levelArr);
        level++;
    }
    return ans;
};
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
    const res = [];

    inOrder(root);
    return res;

    function inOrder(node) {
        if (node !== null) {
            inOrder(node.left);
            res.push(node.val);
            inOrder(node.right);
        }
    }

};

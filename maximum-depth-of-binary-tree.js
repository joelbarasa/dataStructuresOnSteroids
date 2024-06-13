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
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null || !root) {
        return 0;
    }
    else {
        let maxLeft = maxDepth(root.left);
        let maxRight = maxDepth(root.right);
        return Math.max(maxLeft, maxRight) + 1;
    }
};


var maxDepth = function (root) {
    let maxHeight = 0;
    if (root === null || !root) {
        return maxHeight;
    }
    else {
        
        let maxLeft = maxDepth(root.left);
        let maxRight = maxDepth(root.right);
        maxHeight = Math.max(maxLeft, maxRight)+1;
    }
    return maxHeight;
};

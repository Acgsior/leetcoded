/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
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
  if (!root) {
    return 0;
  }

  return getDepth(root, 0);
};

const getDepth = (node, pi) => {
  const depth = pi + 1;
  if (node.left || node.right) {
    const leftDepth = node.left ? getDepth(node.left, depth) : 0;
    const rightDepth = node.right ? getDepth(node.right, depth) : 0;
    return Math.max(leftDepth, rightDepth);
  }

  return depth;
}
// @lc code=end


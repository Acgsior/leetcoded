/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let prev = head;
  let node = head;

  while (node && node.next) {
    node = node.next;

    if (prev.val < node.val) {
      prev.next = node;
      prev = node;
    }
  }

  if (prev) {
    prev.next = null;
  }

  return head;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end

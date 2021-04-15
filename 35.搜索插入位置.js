/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) {
      return i;
    }

    if ((i >= 0 && nums[i] < target) && (i < nums.length - 1) && target < nums[i + 1]) {
      return i + 1;
    }
  }
};
// @lc code=end


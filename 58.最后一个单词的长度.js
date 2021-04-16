/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const trimmed = s.trim();
  if (trimmed === '') {
    return 0;
  }
  const splitted = trimmed.split(' ');
  return splitted[splitted.length - 1].length;
};
// @lc code=end


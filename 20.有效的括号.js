/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parenthesisMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const parenthesisKeys = Object.keys(parenthesisMap);

  const stack = [];

  const sa = s.split('');

  let isValid = true;

  sa.forEach(item => {
    if (parenthesisKeys.indexOf(item) >= 0) {
      stack.push(item);
    } else {
      const prev = stack.pop();
      isValid = isValid && (parenthesisMap[prev] === item)
    }
  });

  isValid = isValid && stack.length === 0;

  return isValid;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const xs = x + '';
  let result = '';
  let startWithZero = true
  let negative = false;
  for (let i = xs.length - 1; i >= 0; i = i - 1) {
    const cur = xs[i];
    if (cur === '0') {
      if (!startWithZero || xs.length === 1) {
        result = result + cur;
      }
    } else {
      if (cur !== '-') {
        startWithZero = false;
        result = result + cur;
      } else {
        negative = true;
      }
    }
  }
  if (negative) {
    result = '-' + result;
  }
  // if the result is out of 32 digits limit
  if (result > Math.pow(2, 31) || result < Math.pow(-2, 31)) {
    result = 0;
  }

  console.log('=== RESULT', result);
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end

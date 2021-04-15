/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  const numArray = [];
  let temp = x;
  do {
    const current = temp % 10;
    numArray.push(current);

    temp = (temp - current) / 10;
  } while (temp > 0.1);

  const original = [...numArray];
  const reversed = numArray.reverse();
  for (let i = 0; i < original.length; i += 1) {
    if (original[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end

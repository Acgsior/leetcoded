/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const digitsLength = digits.length;

  let carryOver = false;
  for (let i = digitsLength - 1; i >= 0; i -= 1) {
    let digitValue = digits[i];
    if (i === digitsLength - 1) {
      digitValue += 1;
    }
    if (carryOver) {
      digitValue += 1;
      carryOver = false;
    }


    if (digitValue >= 10) {
      digits[i] = digitValue - 10;
      carryOver = true;
    } else {
      digits[i] = digitValue;
    }
  }

  if (carryOver) {
    digits.unshift(1);
  }

  return digits;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aLength = a.length;
  const bLength = b.length;
  const primaryLength = Math.max(aLength, bLength);

  const aArray = a.split('').map(i => parseInt(i));
  const bArray = b.split('').map(i => parseInt(i));

  if (aLength < primaryLength) {
    const distance = primaryLength - aLength;
    for (let i = 0; i < distance; i += 1) {
      aArray.unshift(0);
    }
  }

  if (bLength < primaryLength) {
    const distance = primaryLength - bLength;
    for (let i = 0; i < distance; i += 1) {
      bArray.unshift(0);
    }
  }

  const result = [];
  let carryOver = false;
  for (let i = primaryLength - 1; i >= 0; i -= 1) {
    let value = aArray[i] + bArray[i];
    if (carryOver) {
      value += 1;
      carryOver = false;
    }
    if (value > 1) {
      carryOver = true;
      value = value % 2;
    }
    result.unshift(value);
  }

  if (carryOver) {
    result.unshift(1);
  }

  return result.join('');
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addBinary;
// @after-stub-for-debug-end

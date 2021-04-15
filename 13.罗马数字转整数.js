/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanValueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const chars = s.split('');
  let int = 0;

  chars.forEach((c, i) => {
    const current = romanValueMap[c];

    if (i === chars.length - 1 || current >= romanValueMap[chars[i + 1]]) {
      int += current;
    } else {
      int -= current;
    }
  });

  console.log('=== RESULT', int);
  return int;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end

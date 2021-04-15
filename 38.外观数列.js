/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return `${n}`;
  }

  const prev = countAndSay(n - 1);

  const prevValues = prev.split('');

  const items = [];

  prevValues.forEach(v => {
    if (items.length === 0 || items[items.length - 1] !== v) {
      items.push(1);
      items.push(v);
    } else {
      const countIndex = items.length - 2;
      items[countIndex] += 1;
    }
  });

  return items.join('');
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = countAndSay;
// @after-stub-for-debug-end

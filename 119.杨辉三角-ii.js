/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [];
  for (var i = 0; i <= rowIndex; i += 1) {
    result = generateRow(i, result);
  }
  return result;
};

var generateRow = function (level, prevLevel) {
  if (level === 0) {
    return [1];
  }
  if (level === 1) {
    return [1, 1];
  }
  const result = [];

  prevLevel.forEach((i, index) => {
    if (index === 0) {
      result.push(i);
    } else {
      result.push(i + prevLevel[index - 1]);
      if (index === prevLevel.length - 1) {
        result.push(i);
      }
    }
  });
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getRow;
// @after-stub-for-debug-end

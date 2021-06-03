/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
  var result = [];
  var prevLevel = [];
  for (var i = 1; i <= numRows; i += 1) {
    prevLevel = generateLevel(i, prevLevel);
    result.push(prevLevel);
  }
  return result;
};

var generateLevel = function (level, prevLevel) {
  if (level === 1) {
    return [1];
  }
  if (level === 2) {
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
module.exports = generate;
// @after-stub-for-debug-end

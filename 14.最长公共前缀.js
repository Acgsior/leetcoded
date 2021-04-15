/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const common = strs.reduce((acc, current, index) => {
    if (index === 0) {
      return current;
    }

    let maxCommonPrefixLength = 0;
    const prefixArray = acc.split('');

    for (let i = 0; i <= prefixArray.length; i += 1) {
      const prefix = prefixArray.slice(0, i).join('');
      if (current.indexOf(prefix) == 0) {
        maxCommonPrefixLength = i;
      }
    }

    if (maxCommonPrefixLength === 0) {
      return '';
    }
    return prefixArray.slice(0, maxCommonPrefixLength).join('');
  }, '');

  console.log('=== RESULT', common);
  return common;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end

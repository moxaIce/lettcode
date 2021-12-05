/**
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * @param {*} s 
 * 
 * 使用滑动窗口
 */

const lengthOfLongestSubstring = function (s) {
    // 记录长度
    let maxLength = 0;
    // 定义滑动区间
    let interval = [];

    for (let i = 0, len = s.length; i < len; i++) {
        // 当前值是否在滑动区间内
        const pos = interval.indexOf(s[i]);
        if (pos > -1) {
            // 比较大小，保留最大值
            maxLength = (interval.length > maxLength) ? interval.length : maxLength;
            // 如果在，将查询到的位置移除
            interval.splice(0, pos + 1);
            interval.push(s[i])
        } else {
            interval.push(s[i]);
        }
    }

    return maxLength > interval.length ? maxLength : interval.length
};

// console.log(`lengthOfLongestSubString`, lengthOfLongestSubstring('abcabcbb'))
// console.log('abvabv', lengthOfLongestSubstring('abvabv'))
// console.log("dvdf", lengthOfLongestSubstring("dvdf"))
// console.log("aabaab!bb", lengthOfLongestSubstring("aabaab!bb"))
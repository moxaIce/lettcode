/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 滑动窗口？
 * 
 * 解题思路：
 * 暴力解法：
 * 伪代码：
 * 1. 穷举所有字符，保存最长的回文字符串，
 * 2. 如何判断是否为回文字符串？
 *   a. 如果是奇数，从中间截取然后取反比较是否相等。
 */


const isSymmetryStr = (str) => {
    const len = str.length;

    for (let i = 0; i <len; i ++) {
        if (str.charAt(i) !== str.charAt(len - i - 1)) {
            return false;
        }
    }
    return true;
};


var longestPalindrome = function (s) {
    let maxStr = '';
    let maxLen = 0;
    
    if (s.length <= 1) {
        return s;
    }

    for (let i = 0, len = s.length; i < len; i++) {
        for (let j = 1; j < len; j++) {
            const test = s.substring(i, j + 1);
            // console.log('-teest', i, j, test);
            // 如果是回文字符串
            if (isSymmetryStr(test) && test.length > maxLen) {
                maxStr = test;
                maxLen = test.length;
            }
        }
    }

    return maxStr;
};

console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('bb'))
// console.log('bb'.substring(0, 1))
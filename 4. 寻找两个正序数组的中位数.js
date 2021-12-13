/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 解题思路：
 * 1. 中位数概念：中位数指的是在一个有序数组中，
 * 如果是基数则取中间值作为中位数，如果是偶位数则中间两位数相加得到中位数。
 * 
 * 暴力解法；
 * 1. 合并数组
 * 2. 数组排序 因为两个数组是有序的，所以这一部可以变得更简单)
 * 3. 判断是奇数长度还是偶数长度
 * 4. 求值
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let mergeResult = nums1.concat(nums2);

    mergeResult.sort((a, b) => a -b);

    const length = mergeResult.length
    const remainder = length % 2;

    if (length === 1) {
        return mergeResult[0];
    }

    if (length === 0) {
        return 0;
    }
    // 奇数
    if (remainder) {
        return mergeResult[Math.floor(length / 2)]
    }

    return (mergeResult[Math.floor(length / 2) - 1] + mergeResult[Math.floor(length / 2)]) / 2;
};

// const nums1 = [1,3], nums2 = [2];
// const nums1 = [1,2], nums2 = [3,4];
// const nums1 = [0,0], nums2 = [0,0];
const nums1 = [], nums2 = [1];
console.log(findMedianSortedArrays(nums1, nums2))
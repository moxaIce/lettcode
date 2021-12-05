/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        if (map.hasOwnProperty(target - num)) {
            return [map[target - num], i]
        }
        map[num] = i
    }
};


console.log(twoSum([2,7,11,15], 9))
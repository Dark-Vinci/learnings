________________________________________________________________________________________________
https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        for (let i = index + 1; i < nums.length; i++) {
            const sum = nums[index] + nums[i];

            if (sum === target) {
                return [index, i]
            }
        }
    }
};
________________________________________________________________________________________________
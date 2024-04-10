/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Two patterns
// 1. Increasing value
// 2. Decreasing values
//Compare the first and last element to determine pattern
var isMonotonic = function (nums) {
    // nums = [6,5,4,4];
    if (!Array.isArray(nums)) {
        return false;
    }
    else {
        console.log(nums);
        if (nums.length === 0) {
            return false;
        }
        else {
            let isMonotone = true;
            let increasingPattern = true;
            if (nums[nums.length - 1] < nums[0]) {
                increasingPattern = false;
            }

            if (increasingPattern === true) {
                for (let i = 0; i < nums.length; i++) {
                    if (nums[i + 1] < nums[i]) {
                        return false;
                    }
                }
            }
            else {
                for (let i = 0; i < nums.length; i++) {
                    if (nums[i + 1] > nums[i]) {
                        return false;
                    }
                }
            }
            return isMonotone;
        }
    }
};

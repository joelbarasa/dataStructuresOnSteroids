/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// SLIDING WINDOW PATTERN
var findMaxAverage = function (nums, k) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum;
    console.log(max);
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
};


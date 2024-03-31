/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // Dynamic Programming Solution.  ignore the sum of
    // the previous n-1 elements if nth element is greater than the sum.

    let runningSum = nums[0], max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        runningSum = Math.max(runningSum + nums[i], nums[i]);
        max = Math.max(max, runningSum);
    }
    return max;
};

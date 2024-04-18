/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let min = Infinity;
    let start = 0;
    for (let end = 0; end <= nums.length; end++) {
        sum += nums[end];
        while (sum >= target) {
            min = Math.min(min, end - start + 1);
            sum = sum - nums[start];
            start++;
        }
    }
    return min === Infinity ? 0 : min;
};

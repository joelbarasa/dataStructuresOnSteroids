/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    if (!Array.isArray(nums) || isNaN(k)) return 0;
    else {
        let windowStart = 0;
        let windowSum = 0;
        let count = 0;
        for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            
            if (nums[windowEnd] === k) {
                count++;
            }

            windowSum += nums[windowEnd];
            
            if (windowSum === k) {
                count += 1;
                windowSum -= nums[windowStart];
                windowStart++;
            }
        }
        // if (nums[nums.length - 1] === k) count++;
        return count;
    }
};

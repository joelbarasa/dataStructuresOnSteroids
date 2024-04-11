/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let object = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - object[nums[i]] <= k) return true;
        object[nums[i]] = i;
    }
    console.log(object);
    return false;
};

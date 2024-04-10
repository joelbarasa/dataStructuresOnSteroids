/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    // nums = [1,1,2]; nums = [1];
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums.filter(x => x === nums[i]).length === 2) {
            set.add(nums[i]);
        }
    }
    return Array.from(set);
};


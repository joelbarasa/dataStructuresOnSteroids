/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let index = nums.length - 1; index > 0; index--) {        
        if (nums.slice(0, index).includes(nums[index])) {
            nums.splice(index, 1);
        }
    }
};

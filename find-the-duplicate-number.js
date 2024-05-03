/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    if (!Array.isArray(nums) || nums.length < 2) return -1;
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        if(map.has(nums[index])) return nums[index];
        else{
            map.set(nums[index], index);
        }
    }
    console.log(map);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let map = new Map();
    let majorityValues = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        }
        else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    console.log(map);
    for (let [key, value] of map) {
        if (value > (nums.length / 3)) {
            majorityValues.push(key);
        }
    }
    return majorityValues;
};

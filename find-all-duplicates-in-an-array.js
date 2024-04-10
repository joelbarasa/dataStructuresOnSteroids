/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Option 1
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


//Option 2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {    
    let map = new Map();
    let res = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        }
        else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    for (let [key, value] of map) {
        if (value === 2) res.push(key);
    }
    return res;
};

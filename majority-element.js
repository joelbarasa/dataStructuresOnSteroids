/**
 * @param {number[]} nums
 * @return {number}
 */
// Option 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (let [key, value] of map) {
        if (value > (nums.length / 2)) {
            return key;
        }
    }
    console.log(map);
};


// Option 2
var majorityElement = function (nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    else {
        
        nums.sort((a, b) => (a < b) ? -1 : 0);
        console.log(nums);

        for (let i = 0; i <= nums.length; i++) {
            let count = 1;
            while ((nums[i] === nums[i + 1]) && i < nums.length) {
                i++;
                count++;
            }
            if (count > (nums.length / 2)) return nums[i];
        }
        return 0;
    }
};

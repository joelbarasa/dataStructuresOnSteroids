/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    // console.log(nums);
    let start = 0;
    let end = 0;
    const subsets = [];
    subsets.push([]);
    for (let i = 0; i < nums.length; i++) {
        start = 0;
        if (i > 0 && nums[i] === nums[i - 1]) {
            start = end + 1;
        }
        end = subsets.length - 1;
        for (let j = start; j < end + 1; j++) {
            subsets.push([...subsets[j], nums[i]]);
        }
    }
    return subsets;
};

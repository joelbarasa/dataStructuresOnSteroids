/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let found = false;
    let arrayCombination = new Array();
    for (let i = 0; i < nums.length - 1; i++) {
        let complementSumSet = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            let sum = -(nums[i] + nums[j]);
            if (complementSumSet.has(sum)) {
                found = true;
                arrayCombination.push([sum, nums[i], nums[j]]);
            }
            else{
                complementSumSet.add(nums[j]);
            }
        }
    }
    // console.log(complementSumSet);
    return (found === true) ? arrayCombination : [];
};

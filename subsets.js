/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const subsets = [];
    //start by adding the empty subset
    subsets.push([]);

    //we will take all existing subsets and insert the current
    //number in them to create new subsets

    for (let i = 0; i < nums.length; i++) {
        let size = subsets.length;
        for (let j = 0; j < size; j++) {
            console.log(subsets[j]);
            subsets.push([...subsets[j], nums[i]]);
        }
    }
    return subsets;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // Option ONE
    // nums.sort((a, b) => (a < b) ? -1 : 0);
    // return nums[0];

    // Option Two
    // let min = nums[0];
    // for(let i = 1; i < nums.length; i++){
    //     if(nums[i] < min) min = nums[i];
    // }
    // return min;

    // Option THREE
    let left = 0;
    let right = nums.length - 1;
    let min_index = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= nums[nums.length - 1]) {
            min_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return nums[min_index];
};

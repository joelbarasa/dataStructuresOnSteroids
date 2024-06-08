/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    let end = nums.length;
     // copy non-zeroes in-place
    for(let value of nums){
        if(value !== 0){
            nums[index] = value;
            index++;
        }
    }
  
  // fill in rest with zeros
    while(index < end){
        nums[index] = 0;
        index++;
    }
    
};

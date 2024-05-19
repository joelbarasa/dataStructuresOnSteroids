/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    for (let [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }

};


function singleNumber(arr) {
  //So we can XOR all the numbers in the input 
  //duplicate numbers will zero out each other and we will be left with the single number.
  let num = 0
  
  for(let i = 0; i < arr.length; i++) {
    num ^= arr[i]
  }
  return num
}

singleNumber([1, 4, 2, 1, 3, 2, 3])//4
singleNumber([7, 9, 7])//9

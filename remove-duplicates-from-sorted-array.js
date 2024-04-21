/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let index = nums.length - 1; index > 0; index--) {        
        if (nums.slice(0, index).includes(nums[index])) {
            nums.splice(index, 1);
        }
    }
};


var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i, 1);
            i--;
        }
    }
};





function removeDuplicates(nums) {
  //Shift elements to the left whenever duplicates are encountered

  //One pointer for iterating
  let i = 1;

  //One pointer for placing next non duplicate
  let nextNoneDuplicate = 1;
  while (i < nums.length) {
    if (nums[nextNoneDuplicate - 1] !== nums[i]) {
      nums[nextNoneDuplicate] = nums[i];
      nextNoneDuplicate++;
    }
    i++;
  }
  return nextNoneDuplicate;
}

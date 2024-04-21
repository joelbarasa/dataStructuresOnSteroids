//Two Sum with pointers for sorted array
let nums = [2, 8, 7, 11, 15],
  target = 9;

res = twoSumWithSortedArray(nums, target);
console.log(res);

function twoSumWithSortedArray(nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
        // console.log(i + 1, j  + 1);
      return [i, j];
    }
  }
}


function twoSumTwoPointer(nums, target) {
  let startIndex = 0,
    endIndex = nums.length - 1;
  while (startIndex < endIndex) {
    let sum = nums[startIndex] + nums[endIndex];
    if (sum === target) {
      return [startIndex, endIndex];
    }

    if (sum < target) {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  return 0;  
}

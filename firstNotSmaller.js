console.log("...First Element Not Smaller Than Target....");
arr = [2, 3, 5, 7, 11, 13, 17, 19];
target = 8;
let compute = firstNotSmaller(arr, target);
console.log(compute);
function firstNotSmaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= target) {
      boundary_index = mid - 1;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary_index;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > target) {
  //       return i - 1;
  //     }
  //   }
}

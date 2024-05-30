console.log("....Find Element in Sorted Array with Duplicates....");
arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100];
target = 10;

console.log(findFirstOccurrence(arr, target));

function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let targetIndex = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == target) {
      targetIndex = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return targetIndex;
}

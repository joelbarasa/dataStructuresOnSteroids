function findFirstPosition(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;
  if (target > arr[arr.length - 1]) return arr.length;
  else {
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] === target) {
        right = mid - 1;
        return mid;
      } else {
        console.log("KELSEY");
        position = mid;
        right = mid - 1;
      }
    }
    return position;
  }
}

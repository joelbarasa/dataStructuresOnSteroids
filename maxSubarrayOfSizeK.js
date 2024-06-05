console.log("===Find Maximum sub array of size K===");
let size =3, array = [2, 1, 5, 1, 3, 2];
let max = maxSubarrayOfSizeK(array, size);
console.log(max);
function maxSubarrayOfSizeK(arr, size) {
  let maxSum = 0;
  let windowStart = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    // console.log(max);
    if (windowEnd >= size - 1) {
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

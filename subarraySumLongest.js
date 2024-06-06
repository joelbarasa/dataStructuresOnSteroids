function subarraySumLongest(nums, target) {
  let windowStart = 0;
  let length = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum = windowSum + nums[windowEnd];
    while (windowSum > target) {
      windowSum = windowSum - nums[windowStart];
      windowStart++;
    }
    length = Math.max(length, windowEnd - windowStart + 1);
  }
  return length;
}

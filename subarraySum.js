console.log(" Subarray Sum Equals K");
let nums = [1, 1, 1],
  length = 2;
function subarraySum(nums, size) {
  let count = 0;
  let windowStart = 0;
  let sum = 0;
  for (let windowEnd = 0; windowEnd <= nums.length; windowEnd++) {
    sum += nums[windowEnd];
    if (sum === k) {
      count++;
      sum -= nums[windowStart];
      windowStart++;
    }
  }
  if (nums[nums.length - 1] === k) count++;
  return count;
}

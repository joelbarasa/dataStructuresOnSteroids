if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums;
  } else {
    nums.sort((a, b) => (a < b ? -1 : 0));
    console.log(nums);
    let majorityElement = [];

    for (let i = 0; i < nums.length; i++) {
      let count = 1;
      while (nums[i] === nums[i + 1] && i < nums.length) {
        i++;
        count++;
      }
      if (count > nums.length / 3) majorityElement.push(nums[i]);
    }
    return majorityElement;
  }

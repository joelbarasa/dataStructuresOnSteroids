/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// SLIDING WINDOW PATTERN
var findMaxAverage = function (nums, k) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum;
    console.log(max);
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
};


//THE BEST SOLUTION IS HERE...SLIDING WINDOW!
var findMaxAverage = function (nums, k) {
    let averageSum = new Array();
    let windowStart = 0;
    let sum = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        sum += nums[windowEnd];

        if(windowEnd >= k -1){
            averageSum.push(sum/k);
            sum = sum - nums[windowStart];
            windowStart++;
        }

    }
    return Math.max(...averageSum);
};

    //Use sliding window approach
    //sum eleemnts until size k
    //push the sum to average  array
    // slide the window foraward and repeat


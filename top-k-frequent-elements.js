/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    let topKelements = new Array;

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }

    let mapEntries = Array.from(map.entries());
    // console.log(mapEntries); //Two dimentional array
    mapEntries.sort((a, b) => (b[1] - a[1])); //Sort by number of occurences
    // console.log(mapEntries);
    for (let i = 0; i < k; i++) {
        topKelements.push(mapEntries[i][0])
    }
    return topKelements;
};

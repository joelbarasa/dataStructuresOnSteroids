/**
 * @param {string} s
 * @return {number}
 */


// Option 1

var lengthOfLongestSubstring = function (s) {
    // s= " ";
    let longestSubstring = 0;
    let uniqueValues = new Set();

    let totalCount = 0;

    for (let index = 0; index < s.length; index++) {

        if (!uniqueValues.has(s[index])) {
            totalCount++;
            uniqueValues.add(s[index]);
        }
        else {
            longestSubstring = (totalCount > longestSubstring) ? totalCount : longestSubstring;
            totalCount = 1;
            continue;
        }

    }
    console.log(longestSubstring);
    return longestSubstring;
};


// Option 2
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let max = 0;
    let map = new Map();
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(start, map.get(s[end]) + 1);
        }
        map.set(s[end], end);
        max = Math.max(max, end - start + 1);
    }
    return max;
};

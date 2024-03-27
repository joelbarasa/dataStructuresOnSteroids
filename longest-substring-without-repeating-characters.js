/**
 * @param {string} s
 * @return {number}
 */
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

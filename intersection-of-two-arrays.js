/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {    
    let intersect = new Array();
    for (let value of nums1) {
        if (nums2.includes(value) && intersect.includes(value) === false) {
            intersect.push(value);
        }
    }
    return intersect;
};

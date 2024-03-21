/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    console.log([...nums1, ...nums2].sort((a, b) => a - b));    
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let lastIndex = mergedArray.length - 1, medianValue;

    if(lastIndex % 2 === 0){
        medianValue = mergedArray[lastIndex/2];
    }
    else{
        medianValue = (mergedArray[Math.floor(lastIndex/2)] + mergedArray[Math.ceil(lastIndex/2)])/2
    }
    return medianValue;        
};

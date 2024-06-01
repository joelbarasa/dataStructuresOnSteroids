/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    if (arr.length < 3 || !Array.isArray(arr)) {
        return -1;
    }
    else {
        let max = -1;
        let left = 0;
        let right = arr.length - 1;
        let size = arr.length;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (arr[mid] >= arr[mid + 1]) {
                max = mid;
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return max;
        // let alen = arr.length;
        // let left = 0;
        // let right = arr.length - 1;
        // let boundary_index = -1;
        // while (left <= right) {
        //     let mid = left + Math.floor((right - left) / 2);
        //     if (mid === alen - 1 || arr[mid] > arr[mid + 1]) {
        //         boundary_index = mid;
        //         right = mid - 1;
        //     } else {
        //         left = mid + 1;
        //     }
        // }
        // return boundary_index;
    }
};

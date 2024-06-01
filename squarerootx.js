/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 1;
    let right = x;
    let sqrt = -1;
    if (x === 0) return 0;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if ((mid * mid) === x) {
            return mid;
        }
        else if ((mid * mid) > x) {
            sqrt = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return sqrt - 1;
};




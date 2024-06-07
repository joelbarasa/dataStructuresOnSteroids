function findBoundary(arr) {
    // WRITE YOUR BRILLIANT CODE HERE - O(N) -0(1)
   
    let left = 0;
    let right = arr.length - 1;
    let index = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left)/2);
        if (arr[mid] === true) {
            index = mid;            
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

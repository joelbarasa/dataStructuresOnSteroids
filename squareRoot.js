console.log("Square Root Estimation");
let n = 10;
let sqrt = squareRoot(n);
console.log(sqrt);
function squareRoot(n) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 1;
  let right = n;
  let sqrt = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      sqrt = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return sqrt - 1;
}

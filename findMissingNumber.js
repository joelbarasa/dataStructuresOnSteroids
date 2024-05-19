function findMissingNumber(arr) {
  //   let size = arr.length + 1;

  //   //find sum of all numbers from 1 to n
  //   let sum = 0;
  //   for (let i = 1; i <= size; i++) {
  //     sum += i;
  //   }

  //   //subtract all numbers in input from sum
  //   for (let i = 0; i < size - 1; i++) {
  //     sum -= arr[i];
  //   }
  //   //sum, is now the missing number
  //   return sum;

  //   arr = arr.sort((a, b) => (a < b ? -1 : 1));
  //   console.log(arr);
  //   for (let i = 0; i < arr.length; i++) {
  //     // console.log(arr[i]);
  //     // if (arr[i+1] !== i) return i;
  //     if (arr[i + 1] - arr[i] > 1) return arr[i] + 1;
  //   }
  //   return -1;

  let size = arr.length;
  //x1 represents XOR of all values from 1 to n
  let x1 = 1;
  for (let i = 2; i <= size + 1; i++) {
    x1 = x1 ^ i;
  }
  //x2 represents XOR of all values in arr
  let x2 = arr[0];

  for (let i = 1; i < size; i++) {
    x2 = x2 ^ arr[i];
  }
  //missing number is the xor of x1 and x2
  return x1 ^ x2;
}

let rio = findMissingNumber([1, 5, 2, 6, 4]);
console.log(rio);

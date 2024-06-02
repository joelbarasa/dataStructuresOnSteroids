/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]) + 1, i + 1];
        } else {
            map.set(numbers[i], i);
        }
    }
};


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return -1;
};

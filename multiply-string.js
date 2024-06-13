/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        return -1;
    }
    let value1 = parseInt(num1), value2 = parseInt(num2);
    if (value1 < 0 || value2 < 0) {
        return 0;
    }
    return (value1 * value2).toString();
};

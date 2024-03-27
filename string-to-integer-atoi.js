/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    // s ="words and 987"
    // s = "";
    console.log(s.length);
    let result = '';
    let invalidNum = false;
    for (let i = 0; i < s.length; i++) {
        if (/\s/.test(s[i]) === true) {
            continue;
        }
        if (s[i] === '-' && result[0] !== '-') {
            result += '-';
            continue;
        }
        if (!isNaN(s[i])) {
            result += s[i];
            continue;
        }
        if (isNaN(s[i]) && result.length > 0) {
            break;
        }
        if (isNaN(s[i])) {
            invalidNum = true;
            break;
        }
    }
    if (result.length === 0) {
        result = 0;
    }
    result = (invalidNum) ? result = 0 : result;

    if (parseInt(result) > (Math.pow(2, 31) - 1)) {
        console.log('One');
        return Math.pow(2, 31) - 1;
    }
    else if (parseInt(result) < Math.pow(-2, 31)) {
        console.log('Two');
        console.log(parseInt(result))
        return Math.pow(-2, 31);
    }
    else {
        console.log('Kelsey');
        return parseInt(result)
    }
};

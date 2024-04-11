var isNumber = function (s) {
    let isValid = true;
    for (let i = 0; i < s.length; i++) {
        let previous = i - 1;
        let next = i + 1;

        if (i < s.length && isNaN(s[i]) === true && (s.charAt(i) !== 'e' || i < s.length && s.charAt(i) !== 'E') && (s[i] !== '+' || s[i] !== '-')) {
            isValid = false;
            return false;

        }
        if (i < s.length && (s.charAt(i) === 'e' || i < s.length && s.charAt(i) === 'E')) {
            if (previous < 0 || next > s.length) {
                return false;
            }
            else {
                if (isNaN(s[previous]) === true && isNaN(s[next]) === true) {
                    return false;
                }
            }
        }

        if (s[i] === '.') {
            if (previous < 0 || next > s.length) {
                return false;
            }
            else {
                // if (isNaN(s[previous]) === true && isNaN(s[next]) === true) {
                //     return false;
                // }
                if (isNaN(s[next]) === true) {
                    return false;
                }
            }
        }

    }
    return isValid;
};


/*Best solution*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

    if (s === Number.POSITIVE_INFINITY || s === Number.NEGATIVE_INFINITY) {
        return false;
    }
    else {
        return !isNaN(parseInt(s));
    }
};


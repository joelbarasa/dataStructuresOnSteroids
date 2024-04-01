/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let stack = new Array();
    let map = new Map();

    //Set up closing -> open bracket key value pairs
    map.set('}', '{'); map.set(')', '('); map.set(']', '[');

    for (let index = 0; index < s.length; index++) {
        let char = s[index];
        //If the current character is NOT a closing bracket
        // If it IS an opening bracket, push to the stack.
        if (!map.has(char)) {
            stack.push(char);
        }
        else {
            let topElement = (stack.length === 0) ? '#' : stack.pop();
            //If the top Element is not similar to to the mapping of the current braket
            if (map.get(char) !== topElement) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // let map = new Map();
    // map.set("(", ")");
    // map.set("{", "}");
    // map.set("[", "]");
    // if (s.length < 2 || typeof s !== "string") return false;
    // let index = 0;
    // while (index < s.length) {
    //     if (map.get(s.charAt(index)) !== s.charAt(index + 1)) return false;
    //     index = index + 2;
    // }
    // return true;
    let stack = new Array();
    let map = new Map();
    //Set up closing -> open bracket key value pairs
    map.set('}', '{');
    map.set(']', '[');
    map.set(')', '(');
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        //If the current character is a closing bracket
        if (map.has(char)) {
            let topElement = (stack.length === 0) ? '#' : stack.pop();
            //If the top Element is not similar to to the mapping of the current element
            if (topElement !== map.get(char)) {
                return false;
            }
        }
        else {
            // If it was an opening bracket, push to the stack.
            stack.push(char);
        }
    }
    return stack.length === 0;
};

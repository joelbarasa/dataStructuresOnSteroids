/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let stack = s.trim().split(' ');
    let reversedWords = "";
    console.log(stack);
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] !== "") {
            reversedWords += stack[i] + " ";
        }
    }
    return reversedWords.trim();
};

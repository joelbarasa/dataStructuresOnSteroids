/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let sentenceArray = s.trim().split(" ").filter((value) => value !== "");
    let size = sentenceArray.length, reversedString = "";

    for (let index = size - 1; index >= 0; index--) {        
        if (index !== 0) {
            reversedString += sentenceArray[index] + " ";
        }
        else {
            reversedString += sentenceArray[index];
        }
    }
    return reversedString;
};

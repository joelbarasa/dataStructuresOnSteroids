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


function reverseWords(s) {
 let reversedWord = "";
    let lastPos = s.length;
    for (let index = s.length; index >= 0; index--) {
        if (s.charAt(index) === " ") {
            startPos = index + 1;
            if (s[startPos] === " " && index !== 0) {
                continue;
            }
            reversedWord = reversedWord + s.substring(startPos, lastPos).trim() + " ";
            lastPos = startPos;
        }
        if (index === 0) {
            reversedWord = reversedWord + s.substring(index, s.indexOf(" "));
            if (reversedWord.length === 0) {
                reversedWord += s.substring(0, s.length);
            }
        }
    }
    return reversedWord.trim();
}

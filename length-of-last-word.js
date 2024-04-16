/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //    Option 1
    // s = s.trim();
    // let index = s.length - 1;
    // let count = 0;

    // while (s.charAt(index) !== " " && index >= 0) {
    //     console.log('keley')
    //     count++;
    //     index--;
    // }
    // return count;

    // Option 2
    let startIndex = s.trim().lastIndexOf(" ");
    let endIndex = s.trim().length - 1;
    return endIndex - startIndex;

};

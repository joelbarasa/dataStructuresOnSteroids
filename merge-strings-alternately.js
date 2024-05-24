/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    if (word1.length === 0 && word2.length === 0) {
        return null;
    }
    else if (word1.length === 0 && word2.length > 0) {
        return word2;
    }
    else if (word2.length === 0 && word1.length > 0) {
        return word1;
    }
    else {
        let combinedWord = "";
        let first = 0, second = 0;
        while (first < word1.length || second < word2.length) {
            combinedWord += word1.charAt(first);
            combinedWord += word2.charAt(second);
            first++;
            second++;
        }
        console.log(combinedWord);
        return combinedWord;
    }
};

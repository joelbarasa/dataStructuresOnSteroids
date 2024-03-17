var reverseWords = function (s) {
    let sentenceArray = s.split(" ");
    let size = sentenceArray.length;
    let reversed = "";

    for (let index = 0; index < size; index++) {
        reversedWordsHelper(sentenceArray[index]);
        if (index !== size - 1) {
            reversed += reversedWordsHelper(sentenceArray[index]) + " ";
        }
        else {
            reversed += reversedWordsHelper(sentenceArray[index]);
        }       
    }
     console.log(reversed);
     return reversed;
};

var reversedWordsHelper = function (word) {
    return word.split('').reverse().join('');
};

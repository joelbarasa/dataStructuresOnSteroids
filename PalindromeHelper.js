/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    console.log(s);  
    let specialWord = s.toLowerCase();
    specialWord = specialWord.replace(/[^a-zA-Z0-9]/g,"");
    return isPalindromeHelper(specialWord, 0, specialWord.length-1);
};

var isPalindromeHelper = function(word, startPos, endPos){
    if(startPos >= endPos){
        return true;
    }        
    else if(word.charAt(startPos) !== word.charAt(endPos)){
        return false;
    }
    else{
        return isPalindromeHelper(word, startPos+1, endPos-1);        
    }    
};

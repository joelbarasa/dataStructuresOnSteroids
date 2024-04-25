/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
   
    let ransonMap = new Map();
    for (let i = 0; i < ransomNote.length; i++) {        
        ransonMap.set(ransomNote[i], ransonMap.get(ransomNote[i]) + 1 || 1);
    }

    for (let [key, value] of ransonMap) {       
        let magLength = magazine.split('').filter(element => element === key).length;        
        if (magLength < value) return false;
    }
    return true;
};

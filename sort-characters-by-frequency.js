/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        }
        else {
            map.set(s.charAt(i), 1);
        }
    }
    console.log(map);
    const newMap = Array.from(map).sort((a, b) => ((a[1] < b[1]) ? 0 : -1));
    const sortedMap = new Map(newMap);
    console.log(sortedMap);

    let sortedString = "";
    for (let [key, value] of sortedMap) {
        while (value > 0) {
            sortedString += key;
            value--;
        }
    }
    return sortedString;
};

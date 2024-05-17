function binarySearch(array, target) {
    let lowIndex = 0, highIndex = array.length - 1;
    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[midIndex] === target) {
            return "\nElement Found at: " + midIndex;
        }
        else if (target > array[midIndex]) {
            console.log('\nSEARCHING THE RIGHT SUB-ARRAY..');
            lowIndex = midIndex + 1;
        }
        else {
            console.log('\nSEARCHING THE LEFT SUB-ARRAY..');
            highIndex = midIndex - 1;
        }
    }
    return -1;
}

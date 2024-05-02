/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 2) return intervals;

    //sort
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i]
        let previous = intervals[i - 1]
        console.log(current[0] + ":" + previous[1]);

        if (current[0] <= previous[1]) {
            intervals[i] = [previous[0], Math.max(previous[1], current[1])]
            intervals.splice(i - 1, 1)
            i--
        }
    }
    return intervals;
};

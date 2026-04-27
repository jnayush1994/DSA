/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let indexs = {};

    for (let i = 0; i < s.length; i++) {
        if (indexs[s[i]]) {
            indexs[s[i]][1] = i;
        } else {
            indexs[s[i]] = [i, i];
        }
    }

    let intervals = Object.values(indexs);
    let mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], intervals[i][1]);
        }
        else {
            mergedIntervals.push(intervals[i]);
        }
    }

    return mergedIntervals.map(interval => (interval[1] - interval[0]) + 1);
};
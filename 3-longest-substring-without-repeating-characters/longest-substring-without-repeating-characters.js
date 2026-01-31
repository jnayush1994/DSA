/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = 0;
    let maxWindow = 0;
    let map = {};

    while (j < s.length) {
        if (map[s[j]] !== undefined && map[s[j]] >= i) i = map[s[j]] + 1;
        map[s[j]] = j;
        maxWindow = Math.max(maxWindow, (j - i + 1));
        j++;
    }

    return maxWindow;
};
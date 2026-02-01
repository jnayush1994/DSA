/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let i = 0;
    let j = 0;
    let maxWindow = 0;
    let map = {};
    map[s[0]] = 1;

    while (j < s.length) {
        if (isValidWindow(map, k)) {
            maxWindow = Math.max(maxWindow, j - i + 1);
            ++j;
            map[s[j]] = map[s[j]] ? ++map[s[j]] : 1;
        } else {
            --map[s[i]];
            ++i;
        }

    }

    return maxWindow;
};

let isValidWindow = function (obj, k) {
    let totalCount = 0;
    let maxCount = 0;

    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65);
        if (obj[char]) {
            totalCount += obj[char];
            maxCount = Math.max(maxCount, obj[char]);
        }
    }

    return (totalCount - maxCount <= k);
}
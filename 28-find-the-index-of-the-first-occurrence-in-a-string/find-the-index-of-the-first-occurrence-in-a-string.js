/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i < n; i++) {
        let k = i;
        let j = 0;
        for (j = 0; j < m; j++) {
            if (haystack[k] !== needle[j]) break;
            else k++;
        }
        if(j === m) return i;
    }
    return -1;
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let hashW = Array(26).fill(0);
    let hashS = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        ++hashW[s2.charCodeAt(i) - 97];
        ++hashS[s1.charCodeAt(i) - 97];
    }

    let i = 0;
    let j = s1.length - 1;

    while (j < s2.length) {
        if (isPatternMatched(hashW, hashS)) return true;
        else {
            hashW[s2.charCodeAt(i) - 97] -= 1;
            ++i;
            ++j;
            hashW[s2.charCodeAt(j) - 97] += 1;
        }
    }

    return false;
};

var isPatternMatched = function (hashW, hashS) {
    for (let i = 0; i < 26; i++) {
        if (hashW[i] !== hashS[i]) return false;
    }
    return true;
}
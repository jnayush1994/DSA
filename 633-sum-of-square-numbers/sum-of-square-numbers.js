/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let i = 0;
    let j = Math.floor(Math.sqrt(c));
    if (c === 0 || c === 1) return true
    while (i < j) {
        let sum = i ** 2 + j ** 2;
        let sumi = i ** 2 + i ** 2;
        let sumj = j ** 2 + j ** 2;
        if (sum === c || sumi === c || sumj === c) return true;
        if (sum > c) j--;
        if (sum < c) i++;
    }
    return false;
};
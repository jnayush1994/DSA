/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let m = 0;

    while (l < r) {
        m = l + Math.trunc((r - l) / 2);
        if (nums[m] < nums[m + 1]) l = m + 1;
        else r = m;
    }

    return l;
};
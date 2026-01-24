/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;

    while (l < r) {
        m = l + Math.trunc((r - l) / 2);
        if (arr[m] > arr[m + 1]) r = m;
        if (arr[m] < arr[m + 1]) l = m + 1;
    }

    return r;
};
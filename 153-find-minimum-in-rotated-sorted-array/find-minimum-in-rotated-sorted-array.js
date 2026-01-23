/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let m = 0;

    while (l <= r) {
        if (nums[l] < nums[r]) return nums[l];
        else {
            m = l + Math.trunc((r - l) / 2);
            if (m === 0) return nums[r];
            else {
                if (nums[m] < nums[m - 1]) return nums[m];
                else if (nums[l] > nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }
    }
};
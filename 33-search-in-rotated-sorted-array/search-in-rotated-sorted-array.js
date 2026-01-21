/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m = 0;

    while (l <= r) {
        m = l + Math.trunc((r - l) / 2);
        console.log(l,r,m);
        if (nums[m] === target) return m;
        else if (nums[l] <= nums[m]) {
            if (target >= nums[l] && target < nums[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (target <= nums[r] && target > nums[m]) l = m + 1;
            else r = m - 1;
        }
        console.log(l,r,m);
    }
    return -1;
};
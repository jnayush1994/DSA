/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m = 0;
    let output = [-1, -1];

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (nums[m] < target) l = m + 1;
        else r = m;
    }

    output[0] = nums[r] === target ? r : output[0];

    l = 0;
    r = nums.length - 1;

    while (l < r) {
        m = l + Math.ceil((r - l) / 2);
        if (nums[m] > target) r = m - 1;
        else l = m;
    }

    output[1] = nums[r] === target ? r : output[1];

    return output;
};
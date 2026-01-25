/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let m = 0;

    if (nums.length === 1) return nums[0];

    while (l < r) {
        // Find middle element
        m = l + Math.trunc((r - l) / 2);

        // Whta if the miidle elemnt is the single elment in array
        if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) return nums[m];

        // Find if the pair is on left or right
        if (nums[m] === nums[m - 1]) {
            // left
            // Find if the odd element is left or right
            if ((m - 1 - l) % 2 !== 0) r = m - 2;
            if ((r - m) % 2 !== 0) l = m + 1;
        } else if (nums[m] === nums[m + 1]) {
            // right
            // Find if the odd element is left or right
            if ((m - l) % 2 !== 0) r = m - 1;
            if ((r - (m + 1)) % 2 !== 0) l = m + 2;
        }
    }
    return nums[l];
};
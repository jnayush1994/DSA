/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const set = new Set(nums);
    const n = nums.length;
    const output = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i))
            output.push(i);
    }

    return output;
};
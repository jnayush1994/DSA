/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    // const set = new Set(nums);
    // const n = nums.length;
    // const output = [];
    // for (let i = 1; i <= n; i++) {
    //     if (!set.has(i))
    //         output.push(i);
    // }
    // return output;

    const output = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] > 0)
            nums[index] = -nums[index];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            output.push(i + 1);
    }

    return output;
};
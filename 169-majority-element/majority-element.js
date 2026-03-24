/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {};
    const n = nums.length;

    for (let num of nums) {
        if (map[num]) ++map[num];
        else map[num] = 1;

        if (map[num] > Math.trunc(n / 2))
            return num;
    }
};
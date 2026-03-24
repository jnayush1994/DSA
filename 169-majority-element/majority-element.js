/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {};
    const n = nums.length;
    for (let num of nums) {
        map[num] = map[num] ? ++map[num] : 1;

        if (map[num] > Math.trunc(n / 2))
            return num;
    }
};
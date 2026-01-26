/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target) return [i,j];
    //     }
    // }
    let map = {};

    for (let i = 0; i < nums.length; i++)
        map[nums[i]] = i;

    for (let i = 0; i < nums.length; i++) {
        let pairToFind = target - nums[i];
        if (map[pairToFind] && map[pairToFind] !== i) return [i, map[pairToFind]];
    }
};
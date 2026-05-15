/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length - 1;
    let maxPairSum = 0;

    while (i < j) {
        let currentSum = nums[i] + nums[j];
        maxPairSum = Math.max(currentSum, maxPairSum);
        i++;
        j--;
    }

    return maxPairSum;
};
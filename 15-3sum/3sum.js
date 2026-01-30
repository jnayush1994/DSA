/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) twoSum(nums, i, ans)
    }
    return ans;
};

var twoSum = function (numbers, x, ans) {
    let i = x + 1;
    let j = numbers.length - 1;

    while (i < j) {
        let sum = numbers[i] + numbers[j] + numbers[x];
        if (sum > 0) --j;
        else if (sum < 0) ++i;
        else {
            ans.push([numbers[i], numbers[j], numbers[x]]);
            ++i;
            --j;
            while (i < j && numbers[i] === numbers[i - 1]) ++i;
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    const backTrack = (path, startIdx) => {
        result.push([...path]);

        for (let i = startIdx; i < nums.length; i++) {
            if (i > startIdx && nums[i - 1] === nums[i])
                continue;
            path.push(nums[i]);
            backTrack(path, i + 1);
            path.pop();

        }
    }

    backTrack([], 0);

    return result;
};
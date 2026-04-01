/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];

    let backtrack = (path, startIndex) => {
        result.push([...path]);
        for(let i = startIndex; i < nums.length; i++){
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    }

    backtrack([], 0);

    return result;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    const backTrack = (path, currIdx) => {
        if(path.length === nums.length){
            result.push([...path]);
        }
        for (let i = 0; i < nums.length; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i]);
                backTrack(path, i);
                path.pop();
            }
        }
    };
    backTrack([]);
    return result;
};
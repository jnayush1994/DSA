/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    // let arr = [...nums, ...nums];
    let output = Array(nums.length).fill(-1);
    let n = nums.length;
    let stack = [];

    stack.push(nums[nums.length - 1]);
    // output[output.length - 1] = -1;

    for (let i = (2 * nums.length) - 2; i >= 0; i--) {
        while (stack.length) {
            if (nums[i % n] < stack[stack.length - 1]) {
                output[i % n] = stack[stack.length - 1];
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(nums[i % n]);
    }
    return output;
};
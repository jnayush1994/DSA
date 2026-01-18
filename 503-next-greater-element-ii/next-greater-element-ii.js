/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let arr = [...nums, ...nums];
    let output = Array(arr.length).fill(-1);
    let stack = [];

    stack.push(arr[arr.length - 1]);
    output[output.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        while (stack.length) {
            if (arr[i] < stack[stack.length - 1]) {
                output[i] = stack[stack.length - 1];
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }
    return output.slice(0, Math.trunc((output.length / 2)));
};
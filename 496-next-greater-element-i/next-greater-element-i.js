/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let output = [];
    let stack = [];
    let map = {};

    let lastIndex = nums2.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        if (i === lastIndex) map[nums2[i]] = -1;
        else {
            while (stack.length) {
                if (nums2[i] > stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    map[nums2[i]] = stack[stack.length - 1];
                    break;
                }
            }
            map[nums2[i]] = stack.length === 0 ? -1 : map[nums2[i]];
        }
        stack.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {
        output.push(map[nums1[i]]);
    }

    return output;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let max = -Infinity;
    let area = 0;

    while (i < j) {
        area = Math.min(height[i], height[j]) * (j - i);
        max = area > max ? area : max;
        if (height[i] < height[j]) ++i;
        else --j;
    }

    return max;
};
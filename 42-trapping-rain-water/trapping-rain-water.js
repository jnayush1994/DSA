/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let maxL = Array(n).fill(0);
    let maxR = Array(n).fill(0);
    let sum = 0;

    maxL[0] = height[0];
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(height[i], maxL[i - 1]);
    }


    maxR[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(height[i], maxR[i + 1]);
    }


    for (let i = 0; i < n; i++)
        sum += Math.min(maxL[i], maxR[i]) - height[i];

    return sum;
};
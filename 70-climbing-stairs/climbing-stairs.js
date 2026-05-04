/**
 * @param {number} n
 * @return {number}
 */

const dp = {};
var climbStairs = function (n) {
    if (n <= 1) return 1;
    if (!dp[n]) dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return dp[n];
};
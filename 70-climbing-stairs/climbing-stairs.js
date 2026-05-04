/**
 * @param {number} n
 * @return {number}
 */

// const dp = {};
// var climbStairs = function (n) {
//     if (n <= 1) return 1;
//     if (!dp[n]) dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
//     return dp[n];
// };

var climbStairs = function (n) {
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n]
};
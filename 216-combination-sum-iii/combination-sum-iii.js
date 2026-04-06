/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const result = [];

    const backTrack = (remainingSum, path, startIdx) => {
        if (path.length === k && remainingSum === 0)
            result.push([...path]);
        if (remainingSum <= 0 || path.length > k) return;
        for (let i = startIdx; i <= 9; i++) {
            path.push(i);
            backTrack(remainingSum - i, path, i + 1);
            path.pop();
        }
    };

    backTrack(n, [], 1);

    return result;
};
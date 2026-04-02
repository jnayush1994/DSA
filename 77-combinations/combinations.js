/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    const backTrack = (path, startIdx) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        for (let i = startIdx; i <= n; i++) {
            path.push(i);
            backTrack(path, i + 1);
            path.pop();
        }
    }
    backTrack([], 1);
    return result;
};
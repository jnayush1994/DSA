/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    const backTrack = (path, startIdx, diff) => {
        if (diff === 0) result.push([...path]);
        if (diff <= 0) return;
        for (let i = startIdx; i < candidates.length; i++) {
            if (i > startIdx && candidates[i] === candidates[i - 1])
                continue;
            path.push(candidates[i]);
            backTrack(path, i + 1, diff - candidates[i]);
            path.pop();
        }
    };
    backTrack([], 0, target);
    return result;
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    const backTrack = (remainingSum, path, startIdx) => {
        if (remainingSum === 0)
            result.push([...path]);

        if (remainingSum <= 0)
            return;

        for (let i = startIdx; i < candidates.length; i++) {
            path.push(candidates[i]);
            backTrack(remainingSum - candidates[i], path, i);
            path.pop();
        }
    };

    backTrack(target, [], 0);

    return result;
};
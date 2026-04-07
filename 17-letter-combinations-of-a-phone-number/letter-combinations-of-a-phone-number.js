/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    const result = [];

    const backTrack = (path, startIdx) => {
        let choices = '';
        if (startIdx < digits.length) {
            choices = map[digits[startIdx]];
        } else {
            result.push([...path].join(''));
            return;
        }
        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);
            backTrack(path, startIdx + 1)
            path.pop();
        }

    };

    backTrack([], 0);

    return result;
};
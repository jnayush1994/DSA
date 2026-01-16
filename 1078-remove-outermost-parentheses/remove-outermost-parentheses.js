/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let output = "";
    // let stack = [];
    let level = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (level > 0) output += s[i];
            ++level;
        } else {
            --level;
            if (level > 0) output += s[i];
        }
    }

    return output;
};
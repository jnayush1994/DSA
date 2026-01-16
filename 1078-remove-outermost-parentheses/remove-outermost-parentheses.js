/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let output = "";
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (stack.length > 0) output += s[i];
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length > 0) output += s[i];
        }
    }

    return output;
};
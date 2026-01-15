/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) stack.push(s[i]);
        else {
            if (map[stack[stack.length - 1]] === s[i]) stack.pop();
            else return false;
        }
    }
    if (stack.length === 0) return true;
    else return false;
};
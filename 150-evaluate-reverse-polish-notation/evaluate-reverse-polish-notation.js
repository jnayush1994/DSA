/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let operand_1 = operand_2 = 0;

    let map = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            operand_2 = stack.pop();
            operand_1 = stack.pop();
            stack.push(map[tokens[i]](operand_1, operand_2));
        } else {
            stack.push(Number(tokens[i]));
        }
    }

    return stack.pop();
};
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let operand_1 = operand_2 = 0;

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            operand_2 = stack.pop();
            operand_1 = stack.pop();
            stack.push(operand_1 + operand_2);
        } else if (tokens[i] === '-') {
            operand_2 = stack.pop();
            operand_1 = stack.pop();
            stack.push(operand_1 - operand_2);
        } else if (tokens[i] === '*') {
            operand_2 = stack.pop();
            operand_1 = stack.pop();
            stack.push(operand_1 * operand_2);
        } else if (tokens[i] === '/') {
            operand_2 = stack.pop();
            operand_1 = stack.pop();
            stack.push(Math.trunc(operand_1 / operand_2));
        } else {
            stack.push(Number(tokens[i]));
        }
    }

    return stack.pop();
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let output = [];
    let stack = [];

    output.push(0);
    stack.push([temperatures[temperatures.length - 1], temperatures.length - 1]);

    for (let i = temperatures.length - 2; i >= 0; i--) {
        while (stack.length) {
            if (temperatures[i] < stack[stack.length - 1][0]) {
                output.push(stack[stack.length - 1][1] - i);
                break;
            }
            else stack.pop();
        }
        if (stack.length === 0) output.push(0);
        stack.push([temperatures[i], i]);
    }

    return output.reverse();
};
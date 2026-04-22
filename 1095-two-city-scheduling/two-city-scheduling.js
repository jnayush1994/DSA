/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    // sorts in descending order
    costs.sort((a, b) => {
        const diffA = a[1] - a[0];
        const diffB = b[1] - b[0];
        return diffB - diffA;
    })

    let ans = 0;

    for (let i = 0; i < Math.trunc(costs.length / 2); i++) {
        ans += costs[i][0];
    }

    for (let j = Math.trunc(costs.length / 2); j < costs.length; j++) {
        ans += costs[j][1];
    }

    return ans;
};
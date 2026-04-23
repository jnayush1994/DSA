/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const wallet = [0, 0];

    for (let bill of bills) {
        if (bill === 5) {
            wallet[0]++;
        } else if (bill === 10) {
            wallet[1]++;
            wallet[0]--;
        } else {
            if (wallet[1]) {
                wallet[1]--;
                wallet[0]--;
            } else {
                wallet[0] -= 3;
            }
        }

        if (wallet[0] < 0) return false;
    }

    return true;
};
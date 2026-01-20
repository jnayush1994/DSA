/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // let prev = 0;
    // let curr = 1;

    // while(curr*curr < x){
    //     ++curr;
    //     ++prev;
    // }

    // if(curr*curr === x) return curr;
    // else return prev;

    if (x < 2) return x;

    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (x === m * m) return m;
        else if (m * m > x) r = m - 1;
        else if (m * m < x) l = m + 1;
    }

    return r;
};
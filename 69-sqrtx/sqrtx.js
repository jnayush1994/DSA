/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let prev = 0;
    let curr = 1;

    while(curr*curr < x){
        ++curr;
        ++prev;
    }

    if(curr*curr === x) return curr;
    else return prev;
};
/**
 * @param {number} n
 * @return {number}
 */

const store = {};

var fib = function (n, store = {}) {
    if (n in store) return store[n];
    if (n <= 1) return n;

    store[n] = fib(n - 1, store) + fib(n - 2, store);
    return store[n];
};
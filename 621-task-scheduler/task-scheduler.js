/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let freq = Array(26).fill(0);
    let maxFrequency = 0;
    let numberOfElementWithMaxFreq = 0;

    for (let i = 0; i < tasks.length; i++) {
        let curr = tasks[i].charCodeAt() - 65;
        ++freq[curr];
        maxFrequency = Math.max(maxFrequency, freq[curr]);
    }

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] === maxFrequency) ++numberOfElementWithMaxFreq;
    }

    return Math.max(((n + 1) * (maxFrequency - 1)) + numberOfElementWithMaxFreq, tasks.length);

};
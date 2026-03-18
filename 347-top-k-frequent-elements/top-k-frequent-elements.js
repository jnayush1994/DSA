/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const frequencyMap = {};
    for (num of nums) {
        if (frequencyMap[num])
            frequencyMap[num] += 1;
        else
            frequencyMap[num] = 1;
    }
    const queue = new MinPriorityQueue(x => x.freq);
    for (key in frequencyMap) {
        queue.push({ val: key, freq: frequencyMap[key] });
        if (queue.size() > k)
            queue.pop();
    }
    return queue.toArray().map(obj => Number(obj.val));
};
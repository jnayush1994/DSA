/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = new MinHeap();

    for (const num of nums) {
        heap.insert(num);
        if (heap.size() > k)
            heap.extractRoot();
    }

    return heap.root();
};
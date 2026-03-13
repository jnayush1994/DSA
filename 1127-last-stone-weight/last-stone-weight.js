/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const heap = new MaxHeap(null, stones);
    while (heap.size() > 1) {
        let largest = heap.extractRoot();
        let secondLargest = heap.extractRoot();

        if (largest - secondLargest > 0)
            heap.insert(largest - secondLargest)
    }
    return heap.root() || 0;
};
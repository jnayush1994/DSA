/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.minHeap = new MinHeap();
    this.k = k;

    for (const num of nums)
        this.add(num);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.minHeap.insert(val);
    if (this.minHeap.size() > this.k)
        this.minHeap.extractRoot();
    return this.minHeap.root();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
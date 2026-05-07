/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1;

    let x = 0;
    let k = 0;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[x] < nums[i]){
            x = x+1;
            nums[x] = nums[i];
            k++; 
        }
    }
    return k+1;
};
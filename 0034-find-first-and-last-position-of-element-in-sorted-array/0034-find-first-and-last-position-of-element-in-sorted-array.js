


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //needs to be reviewed again.
    let low = 0, high = nums.length-1, mid;
    
    // find the start
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] >= target) high = mid-1;
        else low = mid+1;
    }
    
    // if target doesn't exist
    if(nums[low] !== target) return [-1, -1];
    
    const start = low;
    
    // reset low and high
    low = 0, high = nums.length-1;
    
    // find the end
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] <= target) low = mid+1;
        else high = mid-1;
    }
    return [start, high];
};
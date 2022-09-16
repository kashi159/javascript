var maxSlidingWindow = function(nums, k) {
    let res = [];
    let queue = [];
    
    for(let i=0; i<k; i++){
        while(queue.length && nums[i] > queue[queue.length-1]){
            queue.pop();
        }
        queue.push(nums[i]);
    }
    res.push(queue[0]);
    
    for(let i=k; i<nums.length; i++){
        if(nums[i-k] == queue[0]) queue.shift();
        while(queue.length && nums[i] > queue[queue.length-1]){
            queue.pop();
        }
        queue.push(nums[i]);
        res.push(queue[0]);
    }
    return res;
};
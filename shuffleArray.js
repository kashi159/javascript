/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1 = []; //251
    let arr2 = []; //347
    let arr = [];  // 235417

    for(let i = 0; i<nums.length-n; i++){
        arr1.push(nums[i])
        // console.log(arr1)
    }

    for(let i = n; i<nums.length; i++){
        arr2.push(nums[i])
        // console.log(arr2)
    }

    let i = 0;
    let j = 0
    while(arr.length != nums.length ){
        if(i%2 === 0){
            arr.push(arr1[j]);
        }else{
            arr.push(arr2[j]);
            j++
        }
        i++
    }
    return arr
};

console.log(shuffle([2,5,1,3,4,7], 3))
function maxSubArraySum(arr,num){
    var maxSum=0;
    var tempSum=0;
if(arr.length<num){
    console.log(null);
}
   for(let i=0;i<num;i++){
    maxSum=maxSum+arr[i];
   }
   tempSum=maxSum;
for(let i=num;i<arr.length;i++){
    tempSum=tempSum-arr[i-num]+arr[i];
    maxSum=Math.max(maxSum,tempSum);
}
console.log(maxSum);
}

maxSubArraySum([2,6,9,2,1,8,5,6,3],3)
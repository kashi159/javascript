function bubbleSort(arr){
    for(var i=arr.length; i>=1; i--){
        for(var j=1; j=i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort([5,4,3,2,1])
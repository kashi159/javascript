function insertionSort(arr){
    for(var i=1 ; i<arr.length ;i++){
        var currentVal = arr[i];
        for(var j= i-1 ; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1]=arr[j];
        }
          arr[j+1]=currentVal;
    }
    console.log(arr);
}

insertionSort([5,2,4,9,18,10,22,6])
function selectionSort(arr){
   
    for(var i=0;i<arr.length;i++){
         var minVal=i;
        for(var j=i+1 ;j<arr.length;j++){
             if(arr[j]<arr[minVal]){
                minVal=j;
             }
        }
        if(i!==minVal){
            var temp= arr[i];
            arr[i]=arr[minVal];
            arr[minVal]=temp;
        }
    }
     console.log(arr); 
}

selectionSort([29,54,3,12,8,6,1])
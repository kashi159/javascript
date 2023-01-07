function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    var i=0;
    var j=1;
    if(arr.length===0){ 
        return 0;
    }
    while(j<arr.length){
        if(arr[i]!=arr[j]){
            i++
            arr[i]=arr[j];
            j++;
        }
        else{
            j++;
        }
    }
    return i+1;
  }
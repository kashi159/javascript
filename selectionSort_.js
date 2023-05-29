let array = [5,9,7,6,2,1,8,0,3,4];

function selectionSort(arr){
    
    for(let i = 0; i < arr.length; i++){
        var min = i;
        for(let j = i+1; j< arr.length; j++){
            if(arr[j]< arr[min]){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr;
}

console.log(selectionSort(array))
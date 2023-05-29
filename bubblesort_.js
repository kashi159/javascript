let array = [5,9,7,6,2,1,8,0,3,4];

function BubbleSort(arr){
    for(i = 0; i< arr.length; i++){
        for(let j = 0; j< arr.length; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            } 
        }
    }
    return arr
}

console.log(BubbleSort(array))
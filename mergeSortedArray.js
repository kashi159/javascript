const array1 = [0,3,4,31]
const array2 = [4,6,30]

function mergeSortedArray1(arr1, arr2){
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while (array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        }
        else{
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }

    }
    return mergedArray;
}

function mergeSortedArray(arr1, arr2){
    return [...arr1,...arr2]
}

console.log(mergeSortedArray1(array1, array2))
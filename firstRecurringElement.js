let array = [2, 5, 1, 2, 3, 5, 1, 2, 4]

// function firstRecurringElement1(arr){  //not correct
//     for(let i =0; i< arr.length; i++ ){
//         for(let j =i+1; j< arr.length; j++ ){
//             while(arr[i] === arr[j]){
//                 i++;
//                 j--;
//                 return arr[i]
//             }
//         }
//     }
// }

function firstRecurringElement2(arr){
    let map = {};
    for(let i =0; i< arr.length; i++ ){
        if(map[arr[i]] !== undefined){
            return arr[i]
        }else{
            map[arr[i]] = i
        }
    }
    return undefined;
}

function firstRecurringElement(arr){
    let map = new Map();

    for(let i =0; i< arr.length; i++ ){
        if(map.has(arr[i])){
            return arr[i]
        }else {
            map.set(arr[i])
        }
    }
}

console.log(firstRecurringElement1(array))
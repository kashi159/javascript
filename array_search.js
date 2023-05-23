const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['x', 'y', 'd'];


// Brute Force method O(n^2)- quadratic
function containsElements(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return console.log(true);
            }
        }
    }
    console.log(false)
};

// containsElements(array1, array2)

// Optimized solution O(m+n) - linear
function containsElementsOptimized(arr1, arr2){
    let map = {};

    for(let i =0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        };
    };

    for(let j =0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return console.log(true);
        };
    };

    console.log(false);
}

// containsElementsOptimized(array1, array2)

// in one line 

function containsElementsCleaned(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
};

console.log(containsElementsCleaned(array1, array2))
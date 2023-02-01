// Given a (m x n) 2d array count the number of 5's in it.
var counter = function(arr) {
    let count =0;
    for(let i=0 ; i<arr.length; i++){
        for(let j=0; j<arr[i].length ; j++){
            if(arr[i][j]===5){
                count++;
            }
        }
    }
    return count;
  };
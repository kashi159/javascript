//Write a program to sort the array based on how close it is to number 5.
function sort_array(arr,length){
    /*Function to sort the array in descending order
    After sorting return the sorted array */
     
        for(let i=0; i<arr.length; i++){
          for(let j=0; j<arr.length-1-i ; j++){
          if(Math.abs(arr[j]-5)> Math.abs(arr[j+1]-5)){
             var temp= arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=temp
          }
          else if(Math.abs(arr[j]-5)===Math.abs(arr[j+1]-5)){
              if(arr[j]>arr[j+1]){
                  var temp =arr[j];
                   arr[j]=arr[j+1];
                   arr[j+1]=temp;
              }
          }
         }
        }
        return arr;
        
        // var result = arr.sort(function(a,b){
        //     return Math.abs(length-a)-Math.abs(length-b);
        // });
        // return result; 
    }
    
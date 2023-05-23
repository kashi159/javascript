function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    str1=str1.replace(/[^a-zA-Z ]/ig,'')
    str2=str2.replace(/[^a-zA-Z ]/ig,'')
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let count = 0 ;
  
    for(let i = 0; i< arr1.length; i++){
      for(let j = i; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
          count++;
          break;
        }
      }
      if(count === arr1.length){
        return true
      }
    }
    return false
    
  }
  
  console.log(isSubsequence('sing', 'sting'));
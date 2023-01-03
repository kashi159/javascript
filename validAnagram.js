function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length!=str2.length){
      return false;
  }
  var lookup={};
  
  for(let i=0;i<str1.length;i++){
      let letter= str1[i];
      lookup[letter] ? lookup[letter]+=1 : lookup[letter]=1;
  }
  for(let i=0;i<str2.length;i++){
      let letter=str2[i];
      if(!lookup[letter]){
          return false;
      }
      else{
          lookup[letter]-=1;
      }
  }
 return true;
}

validAnagram('anagram','nagaram')
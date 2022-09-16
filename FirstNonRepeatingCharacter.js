
module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
            let obj = {};
           let queue = [];
           let res = ""
           for(let i = 0; i < A.length; i++)
           {
               if(obj[A[i]])
               {
                   obj[A[i]]++;
               } else
               {
                   obj[A[i]] = 1;
               }
               queue.push(A[i]);
              while(queue.length && obj[queue[0]] > 1)
              {
                  queue.shift();
              }
              let curr = queue.length ? queue[0] : "#";
              res = res + curr
           }
          
          return res
       }
   
       
   };
   
   
// Print the following pattern using any of the looping method:-
function print_pattern(){
    /* Function to print the pattern */

   for(var i=1; i<=5;i++){
       var str="";
       for(var j=1; j<=i;j++){
           str=str+"*"
       }
       console.log(str)
   }
   for(var i=1; i<=5;i++){
       var str="";
       for(var j=0; j<6-i;j++){
           str=str+"*"
       }
       console.log(str)
   }
   
   
}




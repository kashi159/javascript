function recurse(n,i,sum) {
    if(n===i || i>=10){
        return sum;
    }
    sum=sum+i;
   return recurse(n,i+2,sum)
}
console.log(recurse(5,0,0));
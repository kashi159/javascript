function factorialRecursive(n){
    if(n === 1){
        return 1;
    }
    return  n * factorialRecursive(n-1);
}

console.log(factorialRecursive(2))

function factorialIterative(n){
 let product = 1;
 for(let i = 1; i<= n; i++){
    product = product * (n+1-i)
 }
 return product;
}

// console.log(factorialIterative(2))
function power(base,exp){
    if(base ===1 || exp === 0) return 1;
    if(exp === 1) return base;
    
    return base * power(base,exp-1);
}

console.log(power(2,5))

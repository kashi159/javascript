var x=10110101;
var p=5;
var n=3;
var y=01001111
var temp;

temp =(x & ~(~(~0<<n)<<(p+1-n)))|((y & ~(~0<<n))<<(p+1-n));
console.log(temp);


// Step wise logic
//  binary of 0= 00000000
// step 1- ~0= 11111111 //compliment of 0
// n=3
// step 2- ~0<<n=11111000  //left shift by n
// step 3- ~(~0<<n)= ~(11111000)=00000111  // again compliment of (~0<<n)
// RHS-
// step 4-~(~0<<n)<<(p+1-n)=00000111<<(5+1-3)=00111000  //left shift by (p+1-n).
// step 5- ~(~(~0<<n)<<(p+1-n))=~(00111000)=11000111  //again compliment of all.
// step 6-(x & ~(~(~0<<n)<<(p+1-n)))=10110101 & 11000111=10000101 // bitwise And operation with x.
// LHS-
// step 7-~(~0<<n)= ~(11111000)=00000111
// step 8-(y & ~(~0<<n))=01001111&00000111=00000111
// step 9=((y & ~(~0<<n))<<(p+1-n))=00000111<<(5+1-3)=00111000 // bitwise And operation with y
// step 10-LHS|RHS= 10000101 | 00111000 = 10111101  // bitwise OR operation 
var n=10;
var i;
for (i=1 ; i<=n ; i++)
{
if(i%3==0 && i%5==0)
{
    console.log("FizzBuzz");
    continue;
}
else if(i%3==0 && i%5!=0)
{
    console.log("Fizz");
    continue;
}
else if(i%3!=0 && i%5==0)
{
    console.log("Buzz");
    continue;
}
console.log(i);
}
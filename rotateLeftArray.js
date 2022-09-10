var a=[1,2,3,4,5];
var k=6;
var i=0;


while(i<k)
{
  a.push(a.shift());
  i++;
}
console.log(a);
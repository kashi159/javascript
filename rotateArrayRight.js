var a=[1,2,3,4,5];
var k=8;
var i=0;

while(i<k)
{
a.unshift(a.pop());
i++;
}
console.log(a);

var x= ["Kashif is a good boy","I think so too","he is busy"];
// console.log(x.charCodeAt(2,0));
// console.log(x.split(" "));
// console.log(x.substring(1,5));
var max=0;
var temp=[];
for(var j=0;j<x.length;j++)
{
temp = x[j].split(" ");
if(temp.length>max)
max=temp.length;
}
console.log(max);
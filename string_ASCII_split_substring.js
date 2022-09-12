var x= ["Kashif is a good boy","I think so too","he is busy"];
// console.log(x.charCodeAt(0)); // prints ASCII Code
// console.log(x.split(" "));  // splits the string on the selected parameters
// console.log(x.substring(1,8)); // prints only the substring at the desired index
var max=0;
var temp=[];
for(var j=0;j<x.length;j++)
{
temp = x[j].split(" ");
if(temp.length>max)
max=temp.length;
}
console.log(max);
for(var i=1 ; i<=5; i++)
{
  var str="";
  for(var j=10; j<=15-i ;j++)
  {
    str=str + "*";
  }
  for(var j=10; j<=7+2*i ;j++)
  {
    str=str + " ";
  }
  for(var j=10; j<=15-i ;j++)
  {
    str=str + "*";
  }
  console.log(str);
}
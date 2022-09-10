class car
{
  constructor(c,s,ty)
  {
    this.color=c;
    this.speed=s;
    this.tyre=ty;
  }
  print_attributes()
  {
    console.log(this.color);
    console.log(this.speed);
    console.log(this.tyre);
  }
  
  distance(time)
 {
  console.log(this.speed*time);
 }
}

var mySantro=new car("red",100,4);
mySantro.print_attributes();
// console.log(mySantro.distance(70));
mySantro.distance(80);
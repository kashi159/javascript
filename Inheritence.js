
class abc
{
  constructor(a,b)
  {
    this.y=a;
    this.z=b;
  }
  print()
  {
    console.log(this.y);
  }
}

class child extends abc
{
  constructor(a,b,d)
  {
    super(a,b);
  }
  print()
  {
    console.log("This is child class");
    super.print();
  }
}

var x= new child(5,4,9);
x.print();
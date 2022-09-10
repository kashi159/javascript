class Count_Object
{

 static  count=0;

    constructor()
    {
       this.Count_Object=Count_Object.count++;
    }
}

var obj1= new Count_Object();
var obj2= new Count_Object();
var obj3= new Count_Object();
var obj4= new Count_Object();
console.log(Count_Object.count);




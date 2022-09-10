class Employee {
    constructor(Name,Salary)
    {
      this.name=Name;
      this.salary=Salary;
    }
    print()
    {
      let myMap= new Map();
      myMap.set(this.salary,this.name);
      for(let[key,value] of myMap)
      {
        for(let key of myMap.keys()){}
        for(var i=0;i<key.length-1;i++)
        {
          var flag=0;
          for(var j=0;j<key.length-1-i;j++)
          {
             if(key[j]<key[j+1])
             {
              var temp1=key[j];
              key[j]=key[j+1];
              key[j+1]=temp1;
              flag+=1;
              
               var temp2=value[j];
              value[j]=value[j+1];
              value[j+1]=temp2;
             }
          }
        }
        console.log(key);
      console.log(value);
      }
      
    }
  }
    
  var info= new Employee((["John","Abram","Cena","Mendal","Rohit"]),([5000,6000,8000,10000,2000]))
  
  info.print();
  
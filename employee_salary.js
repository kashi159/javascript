class Employee
{
  getInfo(salary,no_of_hours)
    {
    
        this.s=salary;
        this.h=no_of_hours;
       
    }
   
   
    AddSal()
    {
        if(this.s<500)
        {
        var addSal=(this.s+10);
        console.log(addSal);
        }
      
    }
       
    AddWork()
    {
        if(this.h>6)
        var addWork=this.h+5;
        console.log(addWork);
    
       
    }

}

employee1=new Employee();
employee1.getInfo(400,8)
employee1.AddSal();
employee1.AddWork();
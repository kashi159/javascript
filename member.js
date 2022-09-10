class Member
{
    constructor(Name,Age,PhoneNumber,Address,Salary)
    {
        this.name=Name;
        this.age=Age;
        this.phoneNumber=PhoneNumber;
        this.address=Address;
        this.salary=Salary;
    }
    printSalary()
    {
        console.log(this.salary);
    }
}
class Employee extends Member
{
    constructor(Name,Age,PhoneNumber,Address,Salary,Specialization)
    {
        super(Name,Age,PhoneNumber,Address,Salary);
        this.specialization=Specialization;
    }
    print()
    {
        super.printSalary()
    }
}
class Manager extends Member
{
    constructor(Name,Age,PhoneNumber,Address,Salary,Department)
    {
        super(Name,Age,PhoneNumber,Address,Salary)
        this.department=Department;
    }
    print()
    {
        super.printSalary();
    }
}

var employee = new Employee("Kaushik",30,8359745745,"Rourkela",50000,"Assistant");
var employee1 = new Employee("Kashif",27,9175420458,"Bihar",45000,"Developer");
var manager = new Manager("Kaustubh",45,9856743215,"Bhopal",75000,"Finance");
employee.print();
manager.print();
employee1.print();
employee1.name

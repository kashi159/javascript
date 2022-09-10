class Employee
{
    constructor(name, year_of_joining, address)
    {
        this.n=name;
        this.y=year_of_joining;
        this.a=address;
    }
    print_details()
    {
        // console.log(this.n);
        // console.log(this.y);
        // console.log(this.a);
        console.log(`this.n, this.y, this.a`);
    }
}

var employee1= new Employee("Robert",1994,"64C- WallsStreat");
var employee2= new Employee("Sam",2000,"68D- WallsStreat");
var employee3= new Employee("John",1999,"26B- WallsStreat");
employee1.print_details();
employee2.print_details();
employee3.print_details();
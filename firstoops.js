class Student {

    constructor(name,roll_no)
 {
 
 this.name =name;
 this.roll_no = roll_no
 }

 print()
 {
    console.log(this.name);
    console.log(this.roll_no);
 }
 
 }
 
 
 
 var student1= new Student("John",2);
 student1.print();
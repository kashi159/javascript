class Triangle
{
    constructor(side1,side2,side3)
    {
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }
    calculate_area()
    {
        const s=((this.side1+this.side2+this.side3)/2);
       const  area=Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3));
        console.log(area);
    }
    calculate_perimeter()
    {
        var perimeter= (this.side1+this.side2+this.side3);
        console.log(perimeter);
    }
}

var triangle1= new Triangle(3,4,5)
triangle1.calculate_area();
triangle1.calculate_perimeter();
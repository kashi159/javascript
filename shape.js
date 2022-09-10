class Shape
{
    printShape()
    {
        console.log("This is Shape");
    }
}
class Rectangle extends Shape
{
    printRectangle()
    {
        console.log("This is rectangular shape");
    }
}
class Circle extends Shape
{
    printCircle()
    {
        console.log("This is circular shape");
    }
}
class Square extends Rectangle
{
    printSquare()
    {
        console.log("Square is a rectangle");
        super.printShape()
        super.printRectangle()
    }
    
}

var square = new Square()
square.printShape()
square.printRectangle()
class PARENT
{
    printParent()
    {
        console.log("This is Parent class");
    }
}
class CHILD extends PARENT
{
    printChild()
    {
        super.printParent();
        console.log("Child")
    }
}

var parent= new PARENT()
var child= new CHILD()
parent.printParent();
child.printChild()

class Queue
{
    constructor()
    {
        this.q=[];
        this.front=-1;
        this.rear=-1;
    }
    Enqueue(ele)
    {
        if(this.front==-1)
        {
            this.front=this.front+1;
            this.rear=this.rear+1;
        }
        else
        {
            this.rear=this.rear+1;
        }
        this.q[this.rear]=ele;
    }
    Dequeue()
    {
        if(this.front==this.rear)
        {
            this.front=-1;
            this.rear=-1;
        }
        else
        {
            this.front=this.front+1;
        }
        this.q[this.front];
    }
    isEmpty()
    {
        if(this.q.length===0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    getFirstElement()
    {
        return this.q[this.front];
    }
}

var obj=new Queue();
obj.Enqueue(1);
obj.Enqueue(2);
obj.Enqueue(3);
obj.Enqueue(4);
obj.Enqueue(5);
console.log(obj.front);
console.log(obj.rear)
obj.Dequeue()
console.log(obj.front);
console.log(obj.rear)
console.log(obj.q)
console.log(obj.isEmpty())
console.log(obj.getFirstElement())
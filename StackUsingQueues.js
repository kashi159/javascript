class Queues
{
    constructor()
    {
        this.q=[];
    }
    Enqueue(x)
    {
        this.q.push(x);
    }
    Dequeue()
    {
       return this.q.shift();
    }
    isEmpty()
    {
        return this.q.length===0;
    }
    Size()
    {
        return this.q.length;
    }
}
var MyStack = function() {
    this.queue=new Queues();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.Enqueue(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for (let i = 0; i < this.queue.Size() - 1; i++) 
    {
    this.queue.Enqueue(this.queue.Dequeue());
    }
  return this.queue.Dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
   return this.queue.q[this.queue.Size() - 1]; 
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
   return this.queue.isEmpty(); 
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
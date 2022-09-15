class Stack 
{
  constructor()
  {
    this.stack = [];
  }
  push(x) {
    this.stack.push(x);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size(){
      return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
var MyQueue = function() {
  this.stack1=new Stack();
  this.stack2=new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   while(!this.stack1.isEmpty())
       {
           this.stack2.push(this.stack1.pop());
       }
    this.stack1.push(x);
    while(!this.stack2.isEmpty())
        {
            this.stack1.push(this.stack2.pop());
        }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.isEmpty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
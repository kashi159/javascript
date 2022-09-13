/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.queue=[];
    this.size=k;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
if(this.size==this.queue.length)
    {
        return false;
    }
   else
       {
           this.queue.push(value);
           return true;
       }
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
   
       if(this.queue.length==0)
           {
               return false;
           }
   else
       {
           this.queue.shift();
           return true;
       }
      
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.queue.length === 0)
  {
      return -1;
  }
   else
       {
           return this.queue[0];
       }
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
   if(this.queue.length === 0) 
   {
       return -1;
   }
   else
       {
          return this.queue[this.queue.length-1];
       }
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
    if(this.queue.length===0)
       {
           return true;
       }
       else
       {
           return false;
       }
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
   if(this.queue.length==this.size)
       {
           return true;
       }
   else
       {
           return false;
       }
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
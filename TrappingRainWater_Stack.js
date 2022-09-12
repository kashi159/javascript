var trap = function(height) {
    class Stack 
 {
   constructor()
   {
     this.top=-1;
     this.stack = [];
   }
   push(item) {
     this.stack.push(item);
   }
   pop() {
     return this.stack.pop();
   }
   peek() {
     return this.stack[this.stack.length - 1];
   }
   isEmpty() {
     return this.stack.length === 0;
   }
 }
     var stack= new Stack();
     let water=0;
     let curr=0;
     
     while(curr<height.length)
         {
             while(!stack.isEmpty() && height[curr]>height[stack.peek()])
                 {
                   var top=stack.pop();
                   if(stack.isEmpty()) break;
                     var d= curr-stack.peek()-1;
                     var fill= d*(Math.min(height[curr],height[stack.peek()])-height[top]);
                     water+=fill;
                 }
             stack.push(curr++);
         }
     return water;
 };
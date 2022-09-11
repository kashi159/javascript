/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    class Stack 
  {
    constructor()
    {
      this.stack = [];
    }
    add(item) {
      this.stack.push(item);
    }
    remove() {
      return this.stack.pop();
    }
    peek() {
      return this.stack[this.stack.length - 1];
    }
    isEmpty() {
      return this.stack.length === 0;
    }
    getStack(){
        return stack;
    }
   toString(){
       return this.stack.join('');
   }
    
  }
      let stack=new Stack();
      for(var i=0;i<=s.length;i++)
          {
              if(stack.peek()==s[i])
                  {
                      stack.remove();
                  } 
              else
                  {
                      stack.add(s[i]);
                  }
          }
  return stack.toString();
      
     
  };
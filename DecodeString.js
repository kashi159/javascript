/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
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
       
       var stack= new Stack();
       for(var i=0;i<s.length;i++)
           {
               if(s[i]!=']')
                   {
                    stack.add(s[i]);
                   }
               else
                   {
                       let str='';
                       let e=stack.remove();
                       while(e!=='[')
                           {
                               str=e+str;
                               e=stack.remove();
                           }
                       let digit="";
                       while(!isNaN(stack.peek()))
                           {
                               digit=stack.remove()+digit;
                           }
                           stack.add(str.repeat(digit))
                   }     
           }
         return stack.toString();
   };
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
       
       var stackDec= new Stack();
       for(var i=0;i<s.length;i++)
           {
               if(s[i]!=']')
                   {
                       stackDec.add(s[i]);
                   }
               else
                   {
                       let str='';
                       let e=stackDec.remove();
                       while(e!=='[')
                           {
                               str=e+str;
                               e=stackDec.remove();
                           }
                       let digit="";
                       while(!isNaN(stackDec.peek()))
                           {
                               digit=stackDec.remove()+digit;
                           }
                       stackDec.add(str.repeat(digit))
                   }     
           }
         return stackDec.toString();
   };
class Stack {
    constructor(){
        this.stack =[];
        this.length = 0;
    }

    push(value){
        this.stack.push(value);
        this.length++;
        return this;
    }

    pop(){
        if(!this.length){
            return null;
        }
        let deleted = this.stack.pop();
        this.length--;
        return deleted;
    }

    peek(){
        return this.stack[this.length-1]
    }
}

const myStack = new Stack();
myStack.push('facebook');
myStack.push('udemy');
myStack.push('youtube');
myStack.push('google')
// myStack.pop()
console.log(myStack.push('sharpener'))
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stacks{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const pointer = this.top;
            this.top = newNode;
            newNode.next = pointer
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.top){
            return null
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const deleted = this.top
        this.top = this.top.next  
        this.length--;
        return deleted;
    }
}

const myStack = new Stacks();
myStack.push('facebook');
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
// myStack.pop()
// myStack.pop()
// myStack.pop()

console.log(myStack.pop());

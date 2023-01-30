// Define a new node //
class Node {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

// Define a Singly Linked List //
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    //Insert new node //
    push(val){
        var newNode= new Node(val);
        // Inserting first node //
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        // if it is not the first node //
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
          this.length++;
          return this;
    }
    // Deleting last Node //
    pop(){
        //If there is no Node present //
        if(!this.head) return undefined;
        //Deleting the last Node//
        var current= this.head;
        var newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        //if there was only one node present //
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
    // Remove a new node from beginning //
    shift(){
        if(!this.head) return undefined;
        var currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return currentHead;
    }
    // Adding new node to the beginning //
    unshift(val){
        var newNode= new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
        newNode.next= this.head;
        this.head=newNode;
        }
        this.length++;
        return this;
    }
    // Finding node at an index //
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter=0;
        var current=this.head;
        while(counter !== index){
            current=current.next;
            counter++;
        }
        return current;
    }
    // setting(updating) the value of a node at any index//
    set(index,val){
        var foundNode= this.get(index);
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        return false;
    }
    // Inserting a new node at any index //
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index=== this.length) return !!this.push(val); // will return in true or false
        if(index === 0) return !!this.unshift(val);// will return in true or false
      
        var newNode = new Node(val);
        var prev = this.get(index-1);
        var temp=prev.next;
        prev.next=newNode;
        newNode.next= temp;
        this.length++;
        return true;
    }
    // Remove a node at an index //
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var previousNode= this.get(index-1);
        var removed =previousNode.next;
        previousNode.next=removed.next;
        this.length--;
        return removed;
    }
    //print //
    print(){
        var arr = [];
        var current= this.head;
        while(current){
            arr.push(current.val);
            current=current.next;
        }
        console.log(arr);
    }
    // Reversing a linked List //
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i=0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList()
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.pop();
list.push(600);
list.shift();
list.unshift(0);
list.insert(4,700);
list.remove(3)
list.print()
list.reverse();
list.print();
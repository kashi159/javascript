class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this.printList();
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList()
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
    }

    insertAt(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
          console.log('yes')
          return this.append(value);
        }
        
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    removeAt(index) {
        // Check Parameters  
        if(index === 0){
            let current = this.head;
            this.head = current.next;
            this.length--;
            return this.printList()
        }    
        if(index > this.length){
            return
        }
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head
        let second = first.next;

    while(second){
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    this.head.next = null;
    this.head = first
    return this.printList()
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insertAt(2,99)
// myLinkedList.removeAt(50)
myLinkedList.reverse()
// myLinkedList.printList()
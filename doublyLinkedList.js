class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            previous: null,
            next: null
        },
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            previous: null,
            next: null
        }
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        return this.printList(); 
    }

    prepend(value){
        const newNode= {
            value: value,
            previous: null,
            next: null
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++
        return this.printList();
    }

    insertAt(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
          return this.append(value);
        }
        
        const newNode = {
            value: value,
            previous: null,
            next: null
        }
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower.previous = newNode;
        this.length++;
        return this.printList();
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

    removeAt(index) {
        // Check Parameters  
        if(index === 0){
            let current = this.head;
            this.head = current.next;
            this.head.previous = null;
            this.length--;
            return this.printList()
        }    
        if(index > this.length){
            return
        }
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        unwantedNode.next.previous = leader
        this.length--;
        console.log(this)
        return this.printList();
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

let myDoublyLinkedList = new DoublyLinkedList(5);
myDoublyLinkedList.append(15)
myDoublyLinkedList.append(10)
myDoublyLinkedList.prepend(1)
myDoublyLinkedList.insertAt(2,99)
myDoublyLinkedList.removeAt(1)
class Node{
    constructor(data,next=null){
      this.data=data;
      this.next=next;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head=null;
      this.size=0;
    }
    //Insert firsr Node
    insertFirst(data){
      this.head=new Node(data,this.head);
      this.size++;
    }
    //Insert Last Node
    insertLast(data){
      let node=new Node(data);
      let current;
      //if empty,make head
      if(!this.head){
        this.head=node
      }else{
        current=this.head;
        while(current.next){
          current=current.next;
        }
        current.next=node;
      }
      this.size++;
    }
    //Insert at Index
    insertAt(data,index){
      //if index is out of range
      if(index>0 && index>this.size){
        return;
      }
      //if first index
      if(index===0){
        this.insertFirst(data)
        return;
      }
       const node=new Node(data);
       let current,previous;
       //set current to first
       current=this.head;
       let count=0;
       while(count<index){
        previous=current;
        count++;
        current=current.next;
       }
       node.next=current;
       previous.next=node;
       this.size++;
    }
    //Get at index
    getAt(index){
        let current=this.head;
        let count=0;
        while(current){
            if(count==index){
                console.log(current.data)
            }
            count++;
            current=current.next;
        }
        return null;
    }
    //remove at index
    removeAt(index){
        if(index>0 && index>this.size){
            return;
        }
        let current=this.head;
        let previous;
        let count=0
        //Remove first node
        if(index===0)
        {
            this.head=current.next;
        }else{
            while(count<index){
                count++;
                previous=current;
                current=current.next;
            }
            previous.next=current.next
        }
        this.size--; 
    }
    //clear the list
    clearList(){
        this.head=null;
        this.size=0;
    }
    //Print Linked list Data
    printListData(){
       let current=this.head;
       while(current){
        console.log(current.data);
        current=current.next;
       }
    }
  }

  const ll= new LinkedList()
  ll.insertFirst(100)
  ll.insertFirst(200)
  ll.insertFirst(300)
  ll.insertLast(400)
  ll.insertAt(500,10)
//   ll.printListData()
 // ll.removeAt(2)
 ll.clearList()

 ll.printListData()
//ll.getAt(2)
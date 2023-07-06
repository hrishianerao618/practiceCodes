class NewNode {
  value: number;
  next: any;
  constructor(value: number) {
    this.value = value,
      this.next = null
  }
}

class LinkedList {
  head: any;
  tail: any;
  length: number = 1;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value: number) {
    this.tail.next = {
      value: value,
      next: null
    }
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value: number) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  display(){
    let q = this.head;
     while(q!=null){
       console.log(q.value);
       q=q.next;
     }
  }

  insert(index: number, value: number) {
    const newNode = new NewNode(value);
    let q = this.head;
    let currentInd=0;

    while(q.next!=null){
      console.log(1)
      if(currentInd+1 === index){
        newNode.next = q.next;
        q.next = newNode;
        this.length++;
        break;
      }
      q=q.next;
      currentInd++
    }

  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.prepend(9);
console.log(myLinkedList);
myLinkedList.insert(1, 87);
console.log(myLinkedList);
myLinkedList.insert(3, 34);
console.log(myLinkedList);
myLinkedList.display();




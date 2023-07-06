class NewNode {
  value: number;
  next: any;
  constructor(value: number) {
    this.value = value,
      this.next = null
    this.prev = null;
  }
}

class LinkedList {
  head: any;
  tail: any;
  length: number = 1;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value: number) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value: number) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  display() {
    let q = this.head;
    while (q != null) {
      console.log(q.value);
      q = q.next;
    }
  }
  displayRev() {
    let q = this.tail;
    while (q != null) {
      console.log(q.value);
      q = q.prev;
    }
  }

  insert(index: number, value: number) {
    const newNode = new NewNode(value);
    let q = this.head;
    let currentInd = 0;

    while (q.next != null) {
      if (currentInd + 1 === index) {
        newNode.next = q.next;
        q.next.prev = newNode;
        q.next = newNode;
        newNode.prev = q;
        this.length++;
        break;
      }
      q = q.next;
      currentInd++;
    }

  }

  delete(value: number) {
    let q = this.head;
    let r = this.head.next;

    if (this.length === 1) {
      this.head = this.tail = null;
      this.length--;
      return;
    }


    while (q.next != null) {
      if (q.next.value === value) {

        q.next = r.next;
        if (r.next != null) {
          r.next.prev = q;
        } else {
          this.tail = q;
          r.prev = null;
        }
        r = q.next;
        // r.next = null;
        this.length--;
      }
      else {
        q = q.next;
        r = r.next;
      }
    }

    this.deleteFirstElement(value);//if element is at 1st pos its not delted by above loop
  }

  deleteFirstElement(value: number) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
}

let myLinkedList = new LinkedList(10);
//console.log(myLinkedList);
myLinkedList.append(5);
//console.log(myLinkedList);
myLinkedList.append(16);
//console.log(myLinkedList);
myLinkedList.prepend(9);
myLinkedList.prepend(9);
myLinkedList.append(9);
myLinkedList.display();
console.log();
myLinkedList.displayRev();
console.log();
//console.log(myLinkedList);
//myLinkedList.insert(1, 87);
//console.log(myLinkedList);
myLinkedList.insert(3, 34);
//console.log(myLinkedList);
//myLinkedList.display();
myLinkedList.display();
console.log();
myLinkedList.displayRev();
myLinkedList.delete(9);
console.log();
myLinkedList.display();
console.log();
myLinkedList.displayRev();

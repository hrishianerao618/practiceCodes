// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

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
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);





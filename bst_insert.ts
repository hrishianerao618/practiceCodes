class Nod {
  left: any;
  right: any;
  value: number;
  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: any;
  constructor() {
    this.root = null;
  }
  insert(value: number) {
    let node = new Nod(value);
    let q = this.root;
    let r = null;
     if (this.root === null) {
        this.root = node;
       console.log('inserted as root');
        return 'inserted as root';
       
      }
    while (q!==null){
      
      console.log('val',value);
      console.log('q',q.value);
      //console.log('r',r.value);
     
     if(value <= q.value){
       r=q;
        q=q.left;
       console.log('left');
      }
      else if(value > q.value){
        r=q;
        q= q.right;
        console.log('right');
      }
    }
     console.log('q',q);
    console.log('r',r);
    if(value<= r.value )
      r.left = node
    else
       r.right=node ;
    return 'inserted';
    
  }
  lookup(value: number) {
     let q = this.root;
    while (q!==null){
      if(value === q.value){
        return 'Gottcha!! '+value;
      }
      if(value < q.value){
        q=q.left;
      }
      else if(value > q.value){
        q= q.right;
      }
    }
    return 'Not Found!!';
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(170))
console.log(JSON.stringify(traverse(tree.root)))

// 9
// 4 20
//1 6 15 170
function traverse(node:Nod) {
const tree = { value: node.value };
tree.left = node.left === null ? null : traverse(node.left);
tree.right = node.right === null ? null : traverse(node.right);
return tree;
}


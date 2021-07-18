// Node class for linked list node creation
class node{
  constructor(value){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


// Create linked list with prepend and
// append methods, using node class.
class double_linked_list{
  constructor(value){
    let new_node = new node(value);
    this.head = new_node;
    this.tail = this.head;
    this.length = 1;
  };
  append(value){
    // This node will be the new tail.
    // Point the old tail to this node, 
    // point the tail to this node.
    let new_node = new node(value);
    this.tail.next = new_node;
    this.tail = new_node;
    this.length++;
    return this;
  };
  prepend(value){
    let new_node = new node(value);
    new_node.next = this.head;
    this.head = new_node;
    this.length++;
  }
  insert(index, value){
    // Traverse list to node indicated by index
    // Make new node, point to current node
    if(index==0){
      this.prepend(value);
      return
    }
    if(index>=this.length){
      this.append(value);
      return
    }
    // create new node, traverse to leader,
    // patch in new node.
    let nn = new node(value);
    let leadn = this.traverse_to_index(index-1);
    nn.next = leadn.next;
    leadn.next = nn;
    this.length++;
  }
  remove(index){
    let leadn = this.traverse_to_index(index-1);
    let targn = leadn.next;
    leadn.next=targn.next;
    this.length--;
  }
  traverse_to_index(index){
    let i=0;
    let cur_n=this.head;
    while(i!==index){
      cur_n=cur_n.next;
      i++;
    }
    return cur_n;
  }
  // Traverse ll and print each node value
  print(){
    let val_array = [];
    for(let i=0,cn=this.head; cn!=null; i++,cn=cn.next){
      val_array[i] = cn.value;
    }
    console.log(val_array);
  }
};

let ll = new double_linked_list(10);
console.log(ll);
ll.append(15);
console.log(ll);
ll.append(16);
console.log(ll);
ll.prepend(1);
console.log(ll);
ll.print();
ll.insert(2,99)
ll.print();
ll.insert(1,98)
ll.print();
ll.insert(0,97)
ll.print();
ll.insert(100,96)
ll.print();
ll.remove(2);
ll.print();
ll.remove(2);
ll.print();

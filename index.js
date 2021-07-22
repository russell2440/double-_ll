// Node class for double linked list 
// node
class node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


// Create linked list with prepend and
// append methods, using node class.
class double_linked_list{
  constructor(value){
    this.init(value);
  };
  init(value){
    let new_node = new node(value);
    this.head = new_node;
    this.tail = this.head;
    this.length = 1;
  };
  prepend(value){
    let new_node = new node(value);
    this.head.prev = new_node;
    new_node.next = this.head;
    this.head = new_node;
    this.length++;
  }
  append(value){
    // This node will be the new tail.
    // Point the old tail to this node, 
    // point the tail to this node.
    let new_node = new node(value);
    this.tail.next = new_node;
    new_node.prev = this.tail;
    this.tail = new_node;
    this.length++;
    return this;
  };
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
    let leadn = this.traverse_to_index(index-1);
    let follown = leadn.next;
    let nn = new node(value);
    nn.next = follown;
    nn.prev = leadn;
    follown.prev = nn;
    leadn.next = nn;
    this.length++;
  }
  remove(index){
    let leadn = this.traverse_to_index(index-1);
    let rmn = leadn.next;
    leadn.next=rmn.next;
    if(leadn.next){
      leadn.next.prev = leadn;
    }
    this.length--;
  }
  traverse_to_index(index){
    let i=0;
    let cn=this.head;
    while(i!==index){
      cn=cn.next;
      i++;
    }
    return cn;
  }
  // Traverse ll and print each node value
  print_rev(){
    let val_array = [];
    for(let i=0,cn=this.tail; cn!=null; i++,cn=cn.prev){
      val_array[i] = cn.value;
    }
    console.log("R: "+val_array);
  }
  print(){
    let val_array = [];
    for(let i=0,cn=this.head; cn!=null; i++,cn=cn.next){
      val_array[i] = cn.value;
    }
    console.log("F: "+val_array);
  }
};

let dll = new double_linked_list(10);
console.log(dll);
dll.print();
dll.print_rev();
dll.append(15);
console.log(dll);
dll.print();
dll.print_rev();
dll.append(16);
console.log(dll);
dll.print();
dll.print_rev();
dll.prepend(1);
console.log(dll);
dll.print();
dll.print_rev();
dll.insert(2,99)
dll.print();
dll.print_rev();
dll.insert(1,98)
dll.print();
dll.print_rev();
dll.insert(0,97)
dll.print();
dll.print_rev();
dll.insert(100,96)
dll.print();
dll.print_rev();
dll.remove(2);
dll.print();
dll.print_rev();
dll.remove(2);
dll.print();
dll.print_rev();

setTimeout(()=>{
    dll.print();
    dll.print_rev();
},2000);
console.log('set timer')

dll.remove(2);
dll.print();
dll.print_rev();


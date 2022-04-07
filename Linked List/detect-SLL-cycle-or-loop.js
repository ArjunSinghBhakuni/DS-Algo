const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var hasCycle = function (head) {
    let slow=fast=head;
    let flag=0;
    while(slow!=null && fast != null && fast.next!=null){
        slow.next=slow;
        fast.next.next=fast;
        if(slow==fast){
            let flag=1;
            break;
        }
    }
    flag==1 ? console.log("Loop found"): console.log("No Loop")
};

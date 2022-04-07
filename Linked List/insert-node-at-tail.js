
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtTail(head, data) {
    let node=new LinkedListNode(data);
    if(!head){
        head=node;
        return head;
    }
    let current=head;
    while(current.next){
        current=current.next
    }
    current.next=node;
    return head;
}

console.log(insertNodeAtTail(11,2))
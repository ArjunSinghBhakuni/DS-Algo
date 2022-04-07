
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtPosition(head, data,position) {
    let newNode=new LinkedListNode(data);
    if(position==0){
        newNode.next=head;
        head=newNode;
        return head;
    }
    let curr=0;
    let ptr=head
    while(curr<position-1){
        ptr=ptr.next;
        curr++;
    }
    newNode.next=ptr.next;
    ptr.next=newNode;
    return head;
}

console.log(insertNodeAtPosition(11,2,0))
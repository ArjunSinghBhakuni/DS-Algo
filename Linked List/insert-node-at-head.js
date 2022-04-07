
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtHead(head, data) {
    let node=new LinkedListNode(data);
    if(!head){
        head=node;
        return head;
    }else{
        node.next=head;
        head=node;
    }
    return head;
}

console.log(insertNodeAtHead(5,1))
console.log(insertNodeAtHead(7,8))


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function deleteNode(head, position) {
    // If linked list is empty
    if (head == null) return head;  
    // Store head node
    var temp = head;  
    // If head needs to be removed
    if (position == 0)
    {// Change head
        head = temp.next;
        return head;
    }
    // Find previous node of the node to be deleted
    for(let i = 0; temp != null && i < position - 1; i++){
        temp = temp.next;
    }
    // If position is more than number of nodes
    if (temp == null || temp.next == null)
    return;
     
    // Node temp->next is the node to be deleted
    // Store pointer to the next of node to be deleted
    var next = temp.next.next;
     
    // Unlink the deleted node from list
    temp.next = next;

}


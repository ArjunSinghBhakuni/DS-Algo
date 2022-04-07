
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
     let temp = new LinkedListNode();
    while (head != null)
    {
         
        // This condition is for the case
        // when there is no loop
        if (head.next == null)
        {
            return false;
        }
 
        // Check if next is already
        // pointing to temp
        if (head.next == temp)
        {
            return true;
        }
 
        // Store the pointer to the next node
        // in order to get to it in the next step
        let nex = head.next;
 
        // Make next point to temp
        head.next = temp;
 
        // Get to the next node in the list
        head = nex;
    }
 
    return false;
};


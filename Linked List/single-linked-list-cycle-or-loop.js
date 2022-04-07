
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
     var s = new Set();
    //  console.log(s)
        while (head != null) {
            // If we have already has this node
            // in hashmap it means their is a cycle
            // (Because you we encountering the
            // node second time).
            if (s.has(head))
                return true;
            // If we are seeing the node for
            // the first time, insert it in hash
            s.add(head);
            head = head.next;
        }
 
        return false;
};


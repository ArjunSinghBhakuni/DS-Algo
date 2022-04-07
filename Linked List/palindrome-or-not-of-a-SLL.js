const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
var slow = head;
        var ispalin = true;
        var stack = [];
 
        while (slow != null) {
            stack.push(slow.data);
            slow = slow.next;
            // console.log(slow)
            }
 
        while (head != null) {
 
            var reverse = stack.pop();
            if (head.data == reverse) {
                ispalin = true;
            } else {
                ispalin = false;
                break;
            }
            head = head.next;
        }
        return ispalin;
};

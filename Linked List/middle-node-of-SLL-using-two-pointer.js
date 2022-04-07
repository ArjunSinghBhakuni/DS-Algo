const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var middleNode = function (head) {
  var slow_ptr = head;
  var fast_ptr = head;
  if (head != null) {
    while (fast_ptr != null && fast_ptr.next != null) {
      fast_ptr = fast_ptr.next.next;
      slow_ptr = slow_ptr.next;
    }
    return slow_ptr.data;
  }
};

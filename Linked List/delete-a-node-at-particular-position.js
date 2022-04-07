const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function deleteNode(head, position) {
  let currNode = head;
  if (position == 0) {
    return head.next;
  }
  let count = 0;
  while (count < position - 1) {
    currNode = currNode.next;
    count++;
  }
  currNode.next = currNode.next.next;
  return head;
}

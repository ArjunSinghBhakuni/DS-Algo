const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function nth_node(head, n) {
  let len = 0;
  let temp = head;
  while (temp != null) {
    temp = temp.next;
    len++;
  }
  temp = head;
  if (len < n) return;
  for (let i = 1; i < len - n + 1; i++) temp = temp.next;
  return temp.data;
}

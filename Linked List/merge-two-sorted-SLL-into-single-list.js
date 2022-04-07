const ListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};


var mergeTwoLists = function (A, B) {
  if (A == null) return B;
  if (B == null) return A;
  if (A.val < B.val) {
    A.next = mergeTwoLists(A.next, B);
    return A;
  } else {
    B.next = mergeTwoLists(A, B.next);
    return B;
  }
};

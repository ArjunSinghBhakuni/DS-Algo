class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function mirror(root) {
  if (root === null) return null;
  if (root.left !== null) mirror(root.left);
  if (root.right !== null) mirror(root.right);
  temp = root.left;
  root.left = root.right;
  root.right = temp;
}

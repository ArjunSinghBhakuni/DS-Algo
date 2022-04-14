class Node{
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
    //  let root1,root2;
    function identicalTrees(a, b)
    {
        if (a == null && b == null) return true;
        if (a != null && b != null)
            return (a.data == b.data
                    && identicalTrees(a.left, b.left)
                    && identicalTrees(a.right, b.right));
        return false;
    }
// left --> right --> root
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}
let arr = [];
var postorderTraversal = function(root) {
        if (root === null) {
                return root;
        }
        postorderTraversal(root.left);
        postorderTraversal(root.right);
        arr.push(root.val);
}

root = new Node('F');
root.right = new Node('G');
root.right.right = new Node('I');
root.right.right.left = new Node('H');
root.left = new Node('B');
root.left.left = new Node('A');
root.left.right = new Node('D');
root.left.right.left = new Node('C');
root.left.right.right = new Node('E');
postorderTraversal(root);
console.log(arr);
// recursive
// pre order traversal 
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

let root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);

var preOrderTraversal = function(root) {
	if (root) {
		console.log(root.val);

		preOrderTraversal(root.left);

		preOrderTraversal(root.right);
	}
}

preOrderTraversal(root);
console.log('I am here');

root = new Node();
preOrderTraversal(root);
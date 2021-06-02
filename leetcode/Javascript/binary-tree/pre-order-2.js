// pre order traversal
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}
var preOrderTraversal = function(root) {
        if (root === null) {
                return
        }
        // # create an empty stack and push root to it
        let nodeStack = []
        nodeStack.push(root);
        while (nodeStack.length > 0) {
                node = nodeStack.pop();
                console.log(node.val);

                if (node.right !== null) {
                        nodeStack.push(node.right);
                }

                if (node.left !== null) {
                        nodeStack.push(node.left);
                }
        }
}
root = new Node(10)
root.left = new Node(8)
root.right = new Node(2)
root.left.left = new Node(3)
root.left.right = new Node(5)
root.right.left = new Node(2)
preOrderTraversal(root);
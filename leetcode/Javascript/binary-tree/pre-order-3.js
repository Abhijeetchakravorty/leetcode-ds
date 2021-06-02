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
        let nodeStack = [];
        let arr = [];
        nodeStack.push(root);
        console.log(nodeStack);
        // while (nodeStack.length > 0) {
        //         node = nodeStack.pop();
        //         arr.push(node.val);
        //         if (node.right !== null) {
        //                 nodeStack.push(node.right);
        //         }

        //         if (node.left !== null) {
        //                 nodeStack.push(node.left);
        //         }
        // }
        // return arr;
}
let root = new Node(1)
root.right = new Node(2)
root.right.left = new Node(3)
let data = preOrderTraversal(root);
console.log(data);
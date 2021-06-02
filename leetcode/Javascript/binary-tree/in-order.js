class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var helper  = function(root, res) {

}


var inorderTraversal = function(root) {
        let list = [];
        let nodeStack = [];
        let curr = root;
        while(curr !== null || nodeStack.length !== 0) {
                while (curr !== null) {
                        nodeStack.push(curr);
                        curr = curr.left;
                }
                curr = nodeStack.pop();
                list.push(curr.val);
                curr = curr.right;
        }
        return list;
}

root = new Node(1)
root.right = new Node(2)
root.right.left = new Node(3)
console.log(inorderTraversal(root));

root = new Node(10);
root.left = new Node(12);
root.right = new Node(21);
root.right.left = new Node(31);
console.log(inorderTraversal(root));
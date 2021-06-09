// left --> root --> right
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var inorderTraversal = function(root) {
        let data = [];
        let nodeStack = [];
        let curr = root;
        while (curr !== null || nodeStack.length !== 0) {
                while (curr !== null) {
                        nodeStack.push(curr);
                        curr = curr.left;
                }
                curr = nodeStack.pop();
                data.push(curr.val);
                curr = curr.right;
        }
        return data;
}
root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);
console.log(inorderTraversal(root));
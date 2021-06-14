// ROOT --> LEFT ---> RIGHT
// pre order traversal

class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var preOrderTraversal = function(root) {
        var list = [];
        let stack = [root];
        while (stack.length !== 0) {
                const cur = stack.pop();
                const right = cur.right;
                const left = cur.left;
                list.push(cur.val);
                if (right) {
                        stack.push(right);
                }
                if (left) {
                        stack.push(left);
                }
        }
        return list;
}
let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = preOrderTraversal(root);
console.log(data);
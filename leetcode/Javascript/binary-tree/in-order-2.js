class Node {
        constructor(val, left, right) {
                this.val = (val===undefined ? 0 : val);
                this.left = (left===undefined ? null : left);
                this.right = (right===undefined ? null : right);
        }
}

var inorderTraversal = function(root) {
        let res = [];
        helper(root, res);
        return res;
}

var helper = function(root, res) {
        if (root !== null) {
                if (root.left !== null) {
                        helper(root.left, res);
                }
                res.push(root.val);
                if (root.right !== null) {
                        helper(root.right, res);
                }
        }
}

root = new Node(1)
root.right = new Node(2)
root.right.left = new Node(3)
console.log(inorderTraversal(root));
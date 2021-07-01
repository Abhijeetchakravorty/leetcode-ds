var Node = function(val) {
        this.val = val;
        this.left = this.right = null;
}
const lowestCommonAncestor = (root, p, q) => {
        let result;
        const find = (root, p, q, count = 0) => {
                if (!root) return 0;
                let foundOne = (root.val === p.val || root.val == q.val);
                if (foundOne) {
                        count++;
                        if (count === 2) return count;
                }
                const left = find(root.left, p, q, count);
                if (left === 2) {
                        if (foundOne) result = root;
                        return left;
                }
                const right = find(root.right, p, q, count || left);
                if (right === 2) {
                        if (foundOne || left) result = root;
                        return right;
                }
                return count || left || right;
        }
        find(root, p, q);
        return result;
};
let root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.left.right.right = new Node(4);
root.left.right.left = new Node(7);
root.right.right = new Node(8)
root.right.left = new Node(0);
console.log(lowestCommonAncestor(root, 5, 1));
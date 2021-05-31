class Node {
    constructor(elem) {
        this.val = elem;
        this.next = null;
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.i=0;
    }

    printList(head) {
        let temp = head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    }

    addNeighbour(src, dest) {
		src.next = dest;
        dest.prev = src;
	}

    rotateRight(head, k) {
        let dummyNode = new Node(0);
        let temp = head;
        if (temp == null) {
            return temp;
        }
        dummyNode.next = temp;
        dummyNode.prev = null;
        temp.prev = dummyNode;
        while(temp) {
            if (temp.next !== null) {
                if (temp.next.next === null) {
                    dummyNode.val = temp.next.val;
                    temp.next = null;
                    temp = temp.next;
                    this.i++;
                    if (this.i<k) {
                        return this.rotateRight(dummyNode, k);
                    } else {
                        break;
                    }
                }
            }
            temp = temp.next;
        }
        return dummyNode;
    }
}

let llist = new LinkedList();
llist.head = new Node(1);
let first  = new Node(2);
let second = new Node(3);
let third = new Node(4);
let fourth = new Node(5);

llist.addNeighbour(llist.head, first);
llist.addNeighbour(first, second);
llist.addNeighbour(second, third);
llist.addNeighbour(third, fourth);
llist.printList(llist.head);
console.log('///////////////////////');
console.log('///////////////////////');
console.log('///////////////////////');
var ret = llist.rotateRight(llist.head, 2);
llist.printList(ret)

//// a linked list length n
//// Construct a deep copy of the list
//// The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node.
//// 72 - 96 ms

class Node {
        constructor(elem) {
                this.val = elem;
                this.next = null;
                this.random = null;
        }
}

class RandomListNode {
	constructor(elem) {
		this.val = elem;
		this.next = null;
		this.random = null;
	}
}

class LinkedList {
        constructor() {
                this.head = null;
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
	}

	addRandom(src, dest) {
		src.random = dest;
	}

	copyRandomList(head) {
		let iter = head;
		let next = null;
		// First round: make copy of each node,
		// and link them together side-by-side in a single list.
		while (iter != null) {
			next = iter.next;
			let copy = new RandomListNode(iter.val);
			iter.next = copy;
			copy.next = next;
			iter = next;
		}

		// Second round: assign random pointers for the copy nodes.
		iter = head;
		while (iter != null) {
			if (iter.random != null) {
				iter.next.random = iter.random.next;
			}
			iter = iter.next.next;
		}

		// Third round: restore the original list, and extract the copy list.
		iter = head;
		let pseudoHead = new RandomListNode(0);
		let copy = pseudoHead, copyIter = pseudoHead;

		while (iter != null) {
			next = iter.next.next;
			// extract the copy
			copy = iter.next;
			copyIter.next = copy;
			copyIter = copy;

			// restore the original list
			iter.next = next;

			iter = next;
		}

		return pseudoHead.next;
	}
}


let llist = new LinkedList();
llist.head = new Node(7);
let first  = new Node(13);
let second = new Node(11);
let third = new Node(10);
let fourth = new Node(1);

llist.addNeighbour(llist.head, first);
llist.addNeighbour(first, second);
llist.addNeighbour(second, third);
llist.addNeighbour(third, fourth);

llist.addRandom(llist.head, null);
llist.addRandom(first, llist.head);
llist.addRandom(second, fourth);
llist.addRandom(third, second);
llist.addRandom(fourth, llist.head);

llist.printList(llist.head);

console.log('///////////////////////');
console.log('///////////////////////');
console.log('///////////////////////');
console.log('///////////////////////');

let newList = llist.copyRandomList(llist.head);
llist.printList(newList);


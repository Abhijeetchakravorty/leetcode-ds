class Node {
	constructor(elem) {
		this.element = elem;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	printList() {
		let temp = this.head;
		while(temp) {
			console.log(temp.element);
			temp = temp.next;
		}
	}

	addNeighbour(src, dest) {
		src.next = dest;
		dest.prev = src;
	}

	setNodeAtStart(startingnode) {
		startingnode.next = this.head;
		this.head = startingnode;
	}

	deleteNode(node) {
		this.head = node.next;
		node.remove();
	}
}

let llist = new LinkedList();
llist.head = new Node(23);
let second  = new Node(6);
let third = new Node(15);
llist.addNeighbour(llist.head, second);
llist.addNeighbour(second, third);
llist.printList();



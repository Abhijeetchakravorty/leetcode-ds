class Node {
        constructor(elem) {
		this.element = elem;
		this.prev = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	
	addNeighbour(src, dest) {
		src.next = dest;
		dest.prev = src;
	}

	printList() {
		let temp = this.head;
		while(temp) {
			console.log(temp.element);
			temp = temp.next;
		}
	}

	setNodeAtStart(startingnode) {
		startingnode.next = this.head;
        	this.head = startingnode;
	}

	setNodeAtEnd(endingnode) {
		let temp = this.head;
		while(temp) {
		    	if (temp.next == null || temp.next == undefined) {
				temp.next = endingnode;
				break;
		    	} else {
				temp = temp.next;
		    	}
		}
	}

	setCycle(startPos) {
		let counter = 1;
		let temp = this.head;
		let startElem = null
		while(temp) {
			temp = temp.next;
			counter++;
			if (counter == startPos) {
				startElem = temp;
			}
			if (temp.next == null || temp.next == undefined) {
				temp.next = startElem;
				break;
			}
		};
	}

	hasCycle() {
		let nodes_seen = new Set();
		let temp = this.head;
		while(temp) {
			console.log(temp.element);
			nodes_seen.add(temp);
			temp = temp.next;
			if (nodes_seen.has(temp)) {
				console.log("The Linked List is a Circular Linked List: "+true);
				break;
			}
 		}
	}

	deleteNode(node) {
		this.head = node.next;
		node.remove;
	}
}

let llist = new LinkedList();
llist.head = new Node(3);
let second  = new Node(2);
let third = new Node(0);
let fourth = new Node(-4);
llist.addNeighbour(llist.head, second);
llist.addNeighbour(second, third);
llist.addNeighbour(third, fourth);
llist.printList();
console.log('/////////');
llist.setCycle(2);
llist.hasCycle();
class Node {
	constructor(elem) {
		this.element = elem;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	addNeighbour(src, dest) {
		src.next = dest;
	}

	printList() {
		let temp = this.head;
		while(temp) {
			console.log(temp.element);
			temp = temp.next;
		}
	}

	reverseList(head) {
		let prev = null;
		let curr = head;
		while (curr != null) {
			let nextTemp = curr.next; /// store next item in temp 
		    	curr.next = prev; // store prev element in the next variable
		    	prev = curr; // change prev equal to current 
		    	curr = nextTemp; /// change current to nextTemp
		}
		return prev;
	}
		
	reverseList_v1(head) {
		if (head === null || head === undefined || head.next === null || head.next === undefined) {
			return head;
		}
		let p = this.reverseList_v1(head.next) // in recursion
		head.next.next = head; // keep changing loop
		head.next = null; // set next = null
		return p;
	}
}

let llistOne = new LinkedList();
llistOne.head = new Node(4);
let second  = new Node(1);
let third = new Node(8);
let fourth = new Node(4);
let fifth = new Node(5);
llistOne.addNeighbour(llistOne.head, second);
llistOne.addNeighbour(second, third);
llistOne.addNeighbour(third, fourth);
llistOne.addNeighbour(fourth, fifth);
llistOne.printList();

console.log('////////////');
console.log('////////////');
console.log('////////////');

llistOne.head = llistOne.reverseList_v1(llistOne.head); // unless assigned to a variable it won't work
llistOne.printList();

console.log('////////////');
console.log('////////////');
console.log('////////////');
llistOne.head = llistOne.reverseList(llistOne.head); // unless assigned to a variable it won't work
llistOne.printList();
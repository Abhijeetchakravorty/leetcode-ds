class Node {
    	constructor(elem) {
		this.element = elem;
		this.next = null;		
    	}
}

class MyLinkedList {
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


	addNumbers(headA, headB) {
		let tempHead = new Node(0);
		let data;
		let num1 = null, num2 = null, sum=null;
		let carry = null;
		let counter=0
		while(headA && headB) {
			num1 = headA.element;
			num2 = headB.element;
			sum = num1 + num2;
			carry = sum / 10;
			console.log(tempHead);
			tempHead.element = sum;
			tempHead.next = 
			console.log(tempHead.element);
			tempHead = tempHead.next;
			headA = headA.next;
			headB = headB.next;
		}
		return null;
	}
}

let l1 = new MyLinkedList();
l1.head = new Node(2);
let second  = new Node(4);
let third = new Node(3);
l1.addNeighbour(l1.head, second);
l1.addNeighbour(second, third);
// l1.printList();

let l2 = new MyLinkedList();
l2.head = new Node(5);
let second2 = new Node(6);
let third2 = new Node(4);
l2.addNeighbour(l2.head, second2);
l2.addNeighbour(second2, third2);
// l2.printList();
console.log(l1.addNumbers(l1.head, l2.head));
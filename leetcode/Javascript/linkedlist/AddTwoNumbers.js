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


	addNumbers(l1, l2) {
		let dummyHead = new Node(0);
		let p = l1, q = l2, curr = dummyHead;
		let carry = 0;
		while (p != null || q != null) {
		    	let x = (p != null) ? p.element : 0;
		    	let y = (q != null) ? q.element : 0;
		    	let sum = carry + x + y;
		    	carry = sum / 10;
		    	curr.next = new Node(parseInt(sum % 10));
		    	curr = curr.next;
		    	if (p != null) {
				 p = p.next
			};
		    	if (q != null) {
				q = q.next
			};
		}

		//// only in case when carry is greater than 0
		// if (carry > 0) {
		// 	console.log(carry);
		// 	// console.log(counter);
		//     	curr.next = new Node(carry);
		// }
		
		return dummyHead.next;
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
l1.head = l1.addNumbers(l1.head, l2.head);
l1.printList();
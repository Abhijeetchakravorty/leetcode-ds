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

        getIntersectionNode(headA, headB) {
                let self = this;
                self.pA = headA;
                self.pB = headB;

                // iterate over both 
                while (self.pA != self.pB) {
                        self.pA = self.pA === null ? headB : self.pA.next;
                        self.pB = self.pB === null ? headA : self.pB.next;
                }
                
                return self.pA;
        }
}

// 4, 1, 8, 4, 5
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

console.log('/////////////');
///////////// Starting of 2nd linked list //////////
// 5, 6, 1, 8, 4, 5
let llistTwo = new LinkedList();
llistTwo.head = new Node(5);
let secondD  = new Node(6);
let thirdD = new Node(1);
let fourthD = new Node(8);
llistTwo.addNeighbour(llistTwo.head, secondD);
llistTwo.addNeighbour(secondD, thirdD);
llistTwo.addNeighbour(thirdD, fourthD);

llistTwo.head.next.next.next = llistOne.head.next.next; // this step is mandatory

llistTwo.printList();
console.log(llistTwo.getIntersectionNode(llistOne.head, llistTwo.head));
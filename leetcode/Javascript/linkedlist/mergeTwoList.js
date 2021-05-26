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

        mergeTwoSortedList(headA, headB) {
                let dummyNode = new Node(0);
                let tail = dummyNode;
                while(true) {
                        if(headA === null) {
                                tail.next = headB;
                                console.log("I am here");
                                break;
                        }        

                        if(headB === null) {
                                tail.next = headA;
                                console.log("I am here");
                                break;
                        }

                        if (headA.element <= headB.element) {
                                tail.next = headA;
                                headA = headA.next;
                        } else {
                                tail.next = headB;
                                headB = headB.next;
                        }

                        tail = tail.next;
                        console.log(tail);
                }

                return dummyNode.next;
        }
}

let l1 = new LinkedList();
l1.head = new Node(1);
let second  = new Node(2);
let third = new Node(4);

let l2 = new LinkedList();
l2.head = new Node(1);
let second2 = new Node(3);
let third2 = new Node(4);

l1.addNeighbour(l1.head, second);
l1.addNeighbour(second, third);
l1.printList();
console.log('/////////');
l2.addNeighbour(l2.head, second2);
l2.addNeighbour(second2, third2);
l2.printList();
l1.head = l1.mergeTwoSortedList(l1.head, l2.head);
console.log('/////////');
l1.printList();
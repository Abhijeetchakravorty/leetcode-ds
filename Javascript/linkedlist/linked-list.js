class Node {
    constructor(elem) {
        this.elem = elem;
        this.next = null;
        this.prev = null;
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
            console.log(temp.elem);
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

    deleteNode(node) {
        this.head = node.next;
        node.remove;
    }

    setNodeAtPos(pos, node) {
        let counter = 1;
        let temporary = this.head;
        while(counter < pos) {
            if (counter+1==pos) {
                let tempNext = temporary.next;
                let tempPrev = temporary.next.prev;
                console.log(tempNext.elem);
                console.log(tempPrev.elem);
                node.next = tempNext;
                node.prev = tempPrev;
                temporary.next = node;
                counter++;
            } else {
                temporary = temporary.next;
                counter++;
            }

            if (temporary.next == null || temporary.next == undefined) {
                break;
            }
        }
    }
}

let llist = new LinkedList();
llist.head = new Node(23);
let second  = new Node(6);
let third = new Node(15);
llist.addNeighbour(llist.head, second);
llist.addNeighbour(second, third);
let firstNode = new Node(50);
let finalNode = new Node(70);
llist.setNodeAtStart(firstNode);
llist.setNodeAtEnd(finalNode);
llist.printList();
console.log('//////////');
newNode = new Node(45);
llist.setNodeAtPos(3, newNode);
console.log('/////////');
llist.printList();
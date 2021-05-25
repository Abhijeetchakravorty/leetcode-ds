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

        removeNthNode(index) {
                let self = this;
                self.temp = self.head;
                self.counter = 0;
                while(self.temp !== null && self.temp !== undefined) {
                        if (self.counter+1 == index) {
                                if(self.temp.next.next !== null && self.temp.next.next !== undefined) {
                                        self.temp.next = self.temp.next.next;
                                } else {
                                        self.temp.next = null;
                                }
                        } else {
                                self.temp = self.temp.next;
                        }
                        self.counter++;
                }
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
llistOne.removeNthNode(1);
llistOne.printList();

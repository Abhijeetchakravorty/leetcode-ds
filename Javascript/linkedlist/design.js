class Node {
        constructor(elem) {
                this.element = elem;
                this.next = null;
                this.prev = null;
        }
}
class MyLinkedList {
        constructor() {
                this.head = null;
        }
        getVal(index) {
                let counter = 0;
                let temp = this.head;
                while (temp) {
                        if (temp.next !== null && temp.next !== undefined) {
                                if (counter == index) {
                                        break;
                                } else {
                                        temp = temp.next;
                                }
                        }
                }
                return temp;
        }
        addAtHead(start) {
                start.next = this.head;
                this.head = start;
        }
        addAtTail(endingNode) {
                let temp = this.head;
                let last = false;
                while (temp) {
                        if (temp.next == null) {
                                temp.next = endingNode;
                                endingNode.prev = temp;
                                break;
                        } else {
                                temp = temp.next;
                        }
                }
        }
        addAtIndex(pos, node) {
                let counter = 0;
                let temporary = this.head;
                while (counter < pos) {
                        if (counter + 1 == pos) {
                                let tempNext = temporary.next;
                                let tempPrev = temporary.next.prev;
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
        printList() {
                let temp = this.head;
                while (temp) {
                        console.log(temp.element);
                        temp = temp.next;
                }
        }
        deleteAtIndex(index) {
                let counter = 0;
                let temp = this.head;
                while (counter < index) {
                        if (counter + 1 == index) {
                                if (temp.next !== null && temp.next !== undefined) {
                                        if (temp.next.next !== null && temp.next.next !== undefined) {
                                                let tempNext = temp.next.next;
                                                tempNext.prev = temp;
                                                temp = tempNext;
                                                break;
                                        } else {
                                                return temp;
                                        }
                                } else {
                                        return temp;
                                }
                        } else {
                                temp = temp.next;
                        }
                        counter++;
                }
        }
        addNeighbour(src, dest) {
                src.next = dest;
                dest.prev = src;
        }
}
let llistOne = new MyLinkedList();
llistOne.head = new Node(4);
let second = new Node(1);
let third = new Node(8);
let fourth = new Node(4);
let fifth = new Node(5);
let first = new Node(9);
let lastOne = new Node(10);
let nodeSeven = new Node(11);
llistOne.addNeighbour(llistOne.head, second);
llistOne.addNeighbour(second, third);
llistOne.addNeighbour(third, fourth);
llistOne.addNeighbour(fourth, fifth);
llistOne.addAtHead(first);
llistOne.addAtTail(lastOne);
llistOne.addAtIndex(4, nodeSeven);
llistOne.deleteAtIndex(3);
llistOne.printList();
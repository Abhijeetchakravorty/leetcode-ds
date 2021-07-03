class Node {
        constructor(elem) {
                this.element = elem;
                this.next = null;
                this.prev = null;
                this.child = null;
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

        addChild(src, child) {
                src.child = child;
        }

        printList(head) {
                let temp = head;
                while(temp) {
                        console.log(temp.element);
                        temp = temp.next;
                }
        }

        printListNested() {
                let temp = this.head;
                while(temp) {
                        console.log(temp.element);
                        if (temp.child != null) {
                                while(temp.child) {
                                        console.log("  "+temp.child.element)
                                        while(temp.child.child) {
                                                console.log("    "+temp.child.child.element);
                                                temp.child.child = temp.child.child.next;
                                        }
                                        temp.child = temp.child.next;
                                }
                        }
                        temp = temp.next;
                }
        }

        // using while loop ---> 76 - 80 ms
        flattenList(head) {
                // # Base case
                if(head==null) {
                        return;
                }
                let self = this;
                self.curr = head;
                while (self.curr) {
                        if (self.curr.child) {
                                self.temp = self.curr.next;
                                self.childList = self.curr.child;
                                self.curr.next = self.curr.child;
                                self.curr.child.prev = self.curr;
                                self.curr.child = null;

                                self.tail = self.childList;
                                while (self.tail.next) {
                                        self.tail = self.tail.next;
                                }

                                self.tail.next = self.temp
                                if (self.temp) {
                                        self.temp.prev = self.tail;
                                }
                        }
                        self.curr = self.curr.next;
                }
                return head;
        }

        // using recursion --> 108-112 ms
        flattenMultiLevelList(head) {
                // # base case
                if(head == null){
                        return head;
                }
                
                // keep track of the next pointer
                let next = head.next
                
                // # process the down list first
                head.next = this.flattenMultiLevelList(head.child)
                
                // # go to the last node
                let tail = head
                while (tail.next) {
                        tail = tail.next
                }
                
                // # process the next list after the down list
                tail.next = this.flattenMultiLevelList(next)
                
                // # return head node
                return head
        }
}

let l1 = new LinkedList();
l1.head = new Node(1);
let second  = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);
let sixth = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(10);
let eleven = new Node(11);
let twelve = new Node(12);

l1.addNeighbour(l1.head, second);
l1.addNeighbour(second, third);
l1.addNeighbour(third, fourth);
l1.addNeighbour(fourth, fifth);
l1.addNeighbour(fifth, sixth);

l1.addChild(third, seven);
l1.addNeighbour(seven, eight);
l1.addNeighbour(eight, nine);
l1.addNeighbour(nine, ten);
l1.addChild(eight, eleven);
l1.addNeighbour(eleven, twelve);
l1.printList(l1.flattenList(l1.head));
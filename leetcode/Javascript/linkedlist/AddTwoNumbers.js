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

	
}
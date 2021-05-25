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
        while(temp) {
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

    addAtTail(){
        let temp = this.head;
		let last = false;
		while(temp) {
			if (temp.next == null) {
				temp.next = endingNode;
				break;
			} else {
				temp = temp.next;
			}
		}
    }

    addAtIndex(pos, node) {
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

    deleteAtIndex(index) {
        let counter = 1;
        let temp = this.head;
        while(counter < index) {
            if (counter+1 == index) {
                if (temp.next !== null && temp.next !== undefined) {
                    if (temp.next.next !== null && temp.next.next !== undefined) {
                        let tempNext = temp.next.next;
                        tempNext.prev = temp;
                        temp = tempNex;
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
        }
    }

    addNeighbour(src, dest) {
		src.next = dest;
		dest.prev = src;
	}
}
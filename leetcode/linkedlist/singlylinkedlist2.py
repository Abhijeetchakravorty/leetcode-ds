#part 1 repeat
class Node:
        def __init__(self, data):
                self.data = data
                self.next = None
                self.prev = None

class LinkedList:
        def __init__(self):
                self.head = None
        
        def setNeighbour(self, source, dest):
                source.next = dest
                dest.prev = source
        
        def printList(self):
                temp = self.head
                while (temp):
                        print(temp.data)
                        temp = temp.next

elem = LinkedList()
elem.head = Node(23)
second = Node(6)
third = Node(15)
elem.setNeighbour(elem.head, second)
elem.setNeighbour(second, third)
elem.printList()


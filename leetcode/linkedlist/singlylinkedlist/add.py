class Node:
        def __init__(self, data):
                self.data = data
                self.next = None
                self.prev = None

class LinkedList:
        def __init__(self):
                self.head = None
        
        def setNeighbour(self, src, dest):
                src.next = dest
                dest.prev = src
        
        def addAtStart(self, node):
                data = self.head
                self.head = node
                self.head.next = data
        
        def printList(self):
                temp = self.head
                while(temp):
                        print(temp.data)
                        temp = temp.next

p = LinkedList()
p.head = Node(23)
p1 = Node(6)
p2 = Node(15)
p3 = Node(9)
p.setNeighbour(p.head, p1)
p.setNeighbour(p1, p2)
p.addAtStart(p3)
p.printList()

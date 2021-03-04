class Node:
        def __init__(self, data):
                self.data = data
                self.next = None
                self.prev = None
        

class MyLinkedList:
        def __init__(self):
                self.head = None
        
        def setNeighbour(self, source, dest):
                source.next = dest
                dest.prev = source
        
        def getIndex(self, indx):
                pass

        def addAtTheEnd(self):
                pass

        def addAtStart(self):
                pass
        
        def addAtIndex(self):
                pass

        def deleteAtIndex(self):
                pass

        def printList(self):
                temp = self.head
                while (temp):
                        print(temp.data)
                        temp = temp.next

elem = MyLinkedList()
elem.head = Node([])
p1 = elem.head
p2 = Node([1])
p3 = Node([3])
p4 = Node([1, 2])
p5 = Node([1])
p6 = Node([1])
p7 = Node([1])
elem.setNeighbour(p1, p2)
elem.setNeighbour(p2, p3)
elem.setNeighbour(p3, p4)
elem.setNeighbour(p4, p5)
elem.setNeighbour(p5, p6)
elem.setNeighbour(p6, p7)
elem.printList()
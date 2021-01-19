#part 3 request
class Node:
        def __init__(self, data):
                self.data = data
                self.next = None
                self.prev = None

class LinkedList:
        def __init__(self):
                self.head = None
        
        def printList(self):
                temp = self.head
                while (temp):
                        print(temp.data)
                        temp = temp.next
        
        def addNeighbour(self, source, dest):
                source.next = dest
                dest.prev = source
        
        def setNodeAtBeginning(self, startingnode):
                startingnode.next = self.head
                self.head = startingnode
        
        def deleteNode(self, node):
                self.head = node.next
                del node

llist = LinkedList()
llist.head = Node(23)
second = Node(6)
third = Node(15)
llist.addNeighbour(llist.head, second)
llist.addNeighbour(second, third)
llist.printList()
print("Before adding the node end-------------")
one = Node(9)
llist.setNodeAtBeginning(one)
llist.printList()
print("Added new node end ---------------")
llist.deleteNode(one)
llist.printList()
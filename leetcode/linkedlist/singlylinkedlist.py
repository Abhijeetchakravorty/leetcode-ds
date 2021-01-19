#parth 1
class Node:
        def __init__(self, data):
                self.cur = data
                self.next = None

class LinkedList:
        def __init__(self):
                self.head = None

        def printList(self):
                temp = self.head
                while (temp):
                        print(temp.cur)
                        temp = temp.next


if __name__ == "__main__":
        llist = LinkedList()
        llist.head = Node(23)
        second = Node(6)
        third = Node(13)

        llist.head.next = second
        second.next = third
        llist.printList()
class ListNode:
        def __init__(self, data):
                self.val = data
                self.next = None


class Solution:
        def hasCycle(self, head: ListNode) -> bool:
                nodes_seen = set()
                while head is not None:
                        if head in nodes_seen:
                                return True
                        nodes_seen.add(head)
                        head = head.next
                return False
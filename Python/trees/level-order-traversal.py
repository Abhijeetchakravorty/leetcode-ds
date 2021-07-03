# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class TreeNode:
        def __init__(self, data):
                self.val = data
                self.left = None
                self.right = None
class Solution:
    def levelOrder(self, node: TreeNode):
        queue = []
        result = []
        temp = []
        if (node != None):
            queue.append(node)
            queue.append('X')
        
        while (len(queue) > 0):
            head = queue.pop(0)
            if (head == 'X'):
                result.append(temp)
                if(len(queue) > 0):
                    queue.append('X')
                    temp = []
            else:
                temp.append(head.val)
                if(head.left != None):
                    queue.append(head.left)
                if(head.right != None):
                    queue.append(head.right)
        return result

elem = Solution()
root = TreeNode(1)
root.left = TreeNode(2)
root.right=TreeNode(3)
root.left.left=TreeNode(4)
root.left.right=TreeNode(5)
root.right.left=TreeNode(6)
root.right.right=TreeNode(7)
root.left.left.right = TreeNode(8)
print(elem.levelOrder(root))
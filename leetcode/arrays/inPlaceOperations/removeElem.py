class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the length of the array: "))
                self.addItems(0)
        
        def addItems(self, indx):
                if (indx < self.data):
                        self.arr.append(int(input("Please provide a number: ")))
                        indx += 1
                        self.addItems(indx)
        
        def removeItem(self):
                num = int(input("Please provide the element which you wish to delete: "))
                j__ = 0
                while (j__ < len(self.arr)):
                        if (self.arr[j__] == num):
                                del self.arr[j__]
                                j__ = 0
                        else:
                                j__ += 1
                
                del j__
                print(self.arr)
                self.printData(len(self.arr))
                del self.arr
                del self.data
        
        def printData(self, data):
                print(data)

p1 = Solution()
p1.removeItem()

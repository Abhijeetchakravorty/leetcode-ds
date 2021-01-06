class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the number of items: "))
                self.addToItems(0)
        
        def addToItems(self, indx):
                if (indx < self.data):
                        self.arr.append(int(input("Please provide the number: ")))
                        indx += 1
                        self.addToItems(indx)
        
        def returnNum(self):
                self.arr = sorted(self.arr, reverse=True)
                print(self.arr)                
                if (self.data < 3 or self.data < 2):
                        return self.arr[self.data-1]
                else:
                        return self.arr[2]

p1 = Solution()
print(p1.returnNum())
                        
        
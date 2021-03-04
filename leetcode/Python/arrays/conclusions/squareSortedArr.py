class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the length of the array: "))
                self.addToList(0)
        
        def addToList(self, indx):
                if (indx < self.data):
                        self.num = int(input("PLease provide a height: "))
                        self.arr.append(self.num)
                        indx += 1
                        self.addToList(indx)
        
        def squaredSortedArr(self):
                for i in range(self.data):
                        self.arr[i] = pow(self.arr[i], 2)
                self.arr = sorted(self.arr)
                return self.arr

p1 = Solution()
print(p1.squaredSortedArr())
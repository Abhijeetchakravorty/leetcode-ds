#sort array with even numbre in the fron and odd at the back
# I am taking any odd number even in the middle of even numbers should be pushed back
class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the count of elemnents: "))
                self.addItems(0)
        
        def addItems(self, indx):
                if (indx < self.data):
                        self.arr.append(int(input("Please provide the number: ")))
                        indx += 1
                        self.addItems(indx)
        
        def sortArr(self):
                pos = []
                __i = 0
                while(__i < len(self.arr)):
                        if(self.arr[__i]%2 == 0):
                                pos.append(self.arr[__i])
                                del self.arr[__i]
                                __i = 0
                        else:
                                __i += 1

                del __i
                __j = 0
                while(__j < len(pos)):
                        self.arr.append(pos[__j])
                        __j += 1
                
                del __j
                del pos
                del self.data
                return self.arr

p1 = Solution()
print(p1.sortArr())
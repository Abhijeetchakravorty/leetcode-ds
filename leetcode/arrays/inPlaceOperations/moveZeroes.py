#sorted order
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

        def updateSortedArr(self):
                self.j__ = 0
                self.__k = 0
                while (self.j__ < self.data):
                        if ((self.j__+1 < self.data) and self.arr[self.j__+1] < self.arr[self.j__]):
                                self.swap = self.arr[self.j__]
                                self.arr[self.j__] = self.arr[self.j__+1]
                                self.arr[self.j__+1] = self.swap
                                self.j__ = 0
                        else:
                                self.j__ += 1

                while(self.__k < self.data):
                        if (self.arr[self.__k] == 0):
                                self.moveZero = self.arr[self.__k]
                                del self.arr[self.__k]
                                self.arr.append(self.moveZero)
                                self.__k = 0
                        else:
                                self.__k += 1
                
                return self.arr
        

        def updateNonSortedArr(self):
                i__ = n__ = k__=  0
                while(i__ < len(self.arr)):
                        if (self.arr[i__] == 0):
                                n__ += 1
                                del self.arr[i__]
                                i__ = 0
                        else:
                                i__ += 1
                while(k__ < n__):
                        self.arr.append(0)
                        k__ += 1
                        

                return self.arr
p1 = Solution()
print(p1.updateNonSortedArr())
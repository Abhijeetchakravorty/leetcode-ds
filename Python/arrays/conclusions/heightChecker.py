class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the length of the array: "))
                self.addToList(0)
        
        def addToList(self, indx):
                if (indx < self.data):
                        self.arr.append(int(input("PLease provide a height: ")))
                        indx += 1
                        self.addToList(indx)
        
        def sortArr(self):
                j = 0
                k = 0
                count = 0
                self.narr = self.arr.copy()
                while(j < self.data):
                        if ((j+1) < self.data and self.narr[j] > self.narr[j+1]):
                                swap = self.narr[j]
                                self.narr[j] = self.narr[j+1]
                                self.narr[j+1] = swap
                                j = 0
                        else:
                                j+=1
                
                while(k < self.data):
                        if (self.arr[k] != self.narr[k]):
                                count += 1
                        k += 1

                print("Original array: ", self.arr)
                print("Copy array: ", self.narr)
                print(count)
                del j
                del count
                del self.data
                

p1 = Solution()
p1.sortArr()
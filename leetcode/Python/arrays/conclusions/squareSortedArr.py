class Solution:
        def __init__(self):
                self.arr = [-4,-1,0,3,10]
                # self.data = int(input("Please provide the length of the array: "))
                # self.addToList(0)
        
        def squaredSortedArr(self):
                self.i = 0
                self.flag = False
                while(self.i<len(self.arr)):
                        if (self.flag == False):
                                self.arr[self.i] = pow(self.arr[self.i], 2)
                                if (self.i+1 == len(self.arr)):
                                        self.flag = True
                                        self.i = 0
                                else:
                                        self.i += 1
                        else:
                                if (self.i+1 != len(self.arr) and self.i+1 < len(self.arr)):
                                        if (self.arr[self.i] < self.arr[self.i+1]):
                                                self.temp = self.arr[self.i]
                                                self.arr[self.i] = self.arr[self.i+1]
                                                self.arr[self.i+1] = self.temp
                                                self.i = 0
                                                print(self.temp)
                                        else:
                                                self.i += 1
                                else:
                                        self.i += 1
                return self.arr
p1 = Solution()
print(p1.squaredSortedArr())
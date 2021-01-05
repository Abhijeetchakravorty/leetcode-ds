class Solution:
        def __init__(self):
                self.arr = []
                self.add_items()
        

        def add_items(self):
                self.data = int(input("Please provide the number of items: "))
                if (2<= self.data <= 500):
                        self.__j__ = 0
                        while(self.__j__ < self.data):
                                self.num = int(input("Please provide a number: "))
                                self.arr.append(self.num)
                                self.__j__ += 1
                else:
                        print("Value out of range")
                        self.add_items()

        def checkDouble(self):
                self.found = False
                for __i in range(self.data):
                        for __j in range(self.data):
                                if ((__i != __j) and (self.arr[__i] != self.arr[__j]) and ((self.arr[__i] == self.arr[__j] * 2) or (self.arr[__i]/2 == float(self.arr[__j])) or (float(self.arr[__i]) == self.arr[__j]/2))):
                                        self.found = True
                                        break
                        if(self.found):
                                break
                return self.found

p1 = Solution()
print(p1.checkDouble())

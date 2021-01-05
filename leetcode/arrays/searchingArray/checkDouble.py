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
                else:
                        print("Please provide the length")
                        self.add_items()

        def checkDouble(self):
                self.found = False
                for __i in range(len(self.data)):
                        for __j in range(len(self.data)):
                                if ((__i != __j and self.data[__i] != self.data[__j]) and (self.data[__i] * 2 == self.data[__j]) or (self.data[__j] == self.data[__i] * 2)):
                                        self.found = True
                                        break
                        break
                return self.found

p1 = Solution()
p1.checkDouble()
